#!/usr/bin/env node
/*
 * Merender narasi suara untuk animasi.
 *
 * Ada dua mesin suara:
 *
 *   coqui-id  (bawaan) — model VITS yang dilatih dengan rekaman penutur asli
 *                        bahasa Indonesia, jadi vokal dan lafalnya Indonesia
 *                        sepenuhnya. Model diunduh sekali dari rilis GitHub
 *                        Wikidepia/indonesian-tts.
 *                        CATATAN LISENSI: model itu dinyatakan "tidak untuk
 *                        keperluan komersial" oleh pembuatnya.
 *
 *   piper     — cadangan tanpa model Indonesia: espeak-ng mengubah kalimat
 *               menjadi fonem IPA, lalu model Piper bahasa lain menyuarakannya.
 *               Lafalnya benar tetapi warna suaranya bukan orang Indonesia.
 *
 *   node scripts/render-narration.mjs [keluaran.wav] [direktori-proyek]
 *
 * Kebutuhan (hanya saat merender, bukan dependency aplikasi):
 *   coqui-id : python3 + coqui-tts + torch    (pip install coqui-tts torchcodec)
 *   piper    : espeak-ng + python3 + onnxruntime
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'public', 'animasi');

const ENGINE = process.env.NARRATION_ENGINE || 'coqui-id';

/* --- Mesin 1: model bahasa Indonesia asli ---------------------------- */

const ID_RELEASE = 'https://github.com/Wikidepia/indonesian-tts/releases/download/v1.2';
const ID_FILES = ['checkpoint_1260000-inference.pth', 'config.json', 'speakers.pth'];
const ID_DIR = process.env.ID_TTS_DIR || path.join(os.tmpdir(), 'axto-id-tts');
// Penutur perempuan yang paling jelas menurut uji transkripsi ulang.
const ID_SPEAKER = process.env.ID_TTS_SPEAKER || 'SU-08703';

/* --- Mesin 2: fonem espeak + model Piper bahasa lain ------------------ */

const VOICE_PACK = process.env.PIPER_VOICE_PACK || 'vits-piper-sw_CD-lanfrica-medium';
const VOICE_NAME = process.env.PIPER_VOICE_NAME || 'sw_CD-lanfrica-medium';
const VOICE_URL = process.env.PIPER_VOICE_URL ||
  `https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/${VOICE_PACK}.tar.bz2`;
const VOICE_DIR = process.env.PIPER_VOICE_DIR ||
  path.join(os.tmpdir(), 'axto-piper-voice', VOICE_PACK);

function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { encoding: 'utf8', ...opts });
  if (r.status !== 0) throw new Error(`${cmd} gagal (${r.status}): ${r.stderr || ''}`);
  return r.stdout;
}

function ensureIndonesianModel() {
  fs.mkdirSync(ID_DIR, { recursive: true });
  for (const f of ID_FILES) {
    const dest = path.join(ID_DIR, f);
    if (fs.existsSync(dest)) continue;
    process.stdout.write(`Mengunduh model suara Indonesia: ${f} ...\n`);
    run('curl', ['-sSL', '-o', dest, `${ID_RELEASE}/${f}`]);
  }
  return ID_DIR;
}

function ensurePiperVoice() {
  const onnx = path.join(VOICE_DIR, `${VOICE_NAME}.onnx`);
  if (fs.existsSync(onnx)) return { onnx, config: `${onnx}.json` };
  const parent = path.dirname(VOICE_DIR);
  fs.mkdirSync(parent, { recursive: true });
  const tar = path.join(parent, 'voice.tar.bz2');
  process.stdout.write('Mengunduh model suara Piper ...\n');
  run('curl', ['-sSL', '-o', tar, VOICE_URL]);
  run('tar', ['xjf', tar, '-C', parent]);
  fs.rmSync(tar, { force: true });
  if (!fs.existsSync(onnx)) throw new Error(`model tidak ditemukan: ${onnx}`);
  return { onnx, config: `${onnx}.json` };
}

/** Durasi animasi proyek, supaya panjang trek narasi otomatis pas. */
function projectDuration(dir) {
  try {
    const src = fs.readFileSync(path.join(dir || OUT, 'anim.js'), 'utf8');
    const sandbox = {};
    // eslint-disable-next-line no-new-func
    new Function('globalThis', 'window', src)(sandbox, sandbox);
    if (sandbox.AXTOAnim && sandbox.AXTOAnim.DURATION) return sandbox.AXTOAnim.DURATION;
  } catch { /* pakai nilai bawaan */ }
  return 92;
}

/** Naskah + detik kemunculannya, dibaca langsung dari berkas yang dipakai web. */
function loadScript(dir) {
  const src = fs.readFileSync(path.join(dir || OUT, 'narasi.js'), 'utf8');
  const sandbox = {};
  // eslint-disable-next-line no-new-func
  new Function('globalThis', 'window', src)(sandbox, sandbox);
  if (!sandbox.AXTONarasi) throw new Error('naskah narasi tidak terbaca');
  return sandbox.AXTONarasi.LINES;
}

/** Fonemisasi untuk mesin piper: tanda baca dipertahankan sebagai jeda. */
function phonemize(text) {
  const out = [];
  for (const part of text.split(/([,.:;!?])/).filter((s) => s.trim() !== '')) {
    if (/^[,.:;!?]$/.test(part)) { out.push(part); continue; }
    for (const ch of Array.from(run('espeak-ng', ['-q', '--ipa', '-v', 'id', part.trim()]).trim())) {
      out.push(ch);
    }
    out.push(' ');
  }
  return out;
}

/* Skrip Python: menyuarakan tiap kalimat lalu menempatkannya di garis waktu. */

const PY_COMMON = `
def write_wav(path, track, rate):
    import struct
    import numpy as np
    pcm = (np.clip(track, -1, 1) * 32767).astype('<i2')
    data = pcm.tobytes()
    with open(path, 'wb') as f:
        f.write(b'RIFF' + struct.pack('<I', 36 + len(data)) + b'WAVEfmt ')
        f.write(struct.pack('<IHHIIHH', 16, 1, 1, rate, rate * 2, 2, 16))
        f.write(b'data' + struct.pack('<I', len(data)))
        f.write(data)

def place(track, audio, start_sample, gain=0.92):
    import numpy as np
    end = min(len(track), start_sample + len(audio))
    if end <= start_sample:
        return
    fade = max(1, int(0.02 * 22050))
    env = np.ones(len(audio), dtype='float32')
    env[:fade] = np.linspace(0, 1, fade)
    env[-fade:] = np.linspace(1, 0, fade)
    track[start_sample:end] += (audio * env)[: end - start_sample] * gain
`;

const PY_COQUI = `
import json, math, sys
import numpy as np
${PY_COMMON}
from TTS.utils.synthesizer import Synthesizer

model_dir, speaker, plan_path, out_path = sys.argv[1:5]
plan = json.load(open(plan_path))

syn = Synthesizer(
    tts_checkpoint=f'{model_dir}/checkpoint_1260000-inference.pth',
    tts_config_path=f'{model_dir}/config.json',
    tts_speakers_file=f'{model_dir}/speakers.pth',
    use_cuda=False)
rate = syn.output_sample_rate
if hasattr(syn.tts_model, 'length_scale'):
    syn.tts_model.length_scale = plan.get('length_scale', 1.0)

total = int(math.ceil(plan['duration'] * rate)) + rate
track = np.zeros(total, dtype=np.float32)
report = []
for item in plan['lines']:
    wav = np.array(syn.tts(item['text'], speaker_name=speaker), dtype=np.float32)
    wav = wav / max(1e-6, float(np.max(np.abs(wav))))
    place(track, wav, int(item['t'] * rate))
    report.append({'t': item['t'], 'seconds': round(len(wav) / rate, 2)})

peak = float(np.max(np.abs(track)))
if peak > 1.0:
    track /= peak
write_wav(out_path, track, rate)
print(json.dumps({'rate': rate, 'peak': round(peak, 3), 'lines': report}))
`;

const PY_PIPER = `
import json, math, sys
import numpy as np
import onnxruntime
${PY_COMMON}

model, config, plan_path, out_path = sys.argv[1:5]
cfg = json.load(open(config))
pid = cfg['phoneme_id_map']
rate = cfg['audio']['sample_rate']
inf = cfg.get('inference', {})
plan = json.load(open(plan_path))

FALLBACK = {'ɡ': 'g', 'g': 'ɡ', 'ʤ': 'ʒ', 'ʧ': 'ʃ', 'ɾ': 'r', 'ʔ': '.', 'ɦ': 'h'}

def ids_for(phonemes):
    ids = [pid['^'][0], pid['_'][0]]
    for p in phonemes:
        key = p if p in pid else FALLBACK.get(p)
        if key is None or key not in pid:
            continue
        ids.append(pid[key][0])
        ids.append(pid['_'][0])
    ids.append(pid['$'][0])
    return ids

sess = onnxruntime.InferenceSession(model, providers=['CPUExecutionProvider'])
total = int(math.ceil(plan['duration'] * rate)) + rate
track = np.zeros(total, dtype=np.float32)
report = []
for item in plan['lines']:
    ids = np.array([ids_for(item['phonemes'])], dtype=np.int64)
    scales = np.array([inf.get('noise_scale', 0.667), plan.get('length_scale', 1.0),
                       inf.get('noise_w', 0.8)], dtype=np.float32)
    feeds = {'input': ids, 'input_lengths': np.array([ids.shape[1]], dtype=np.int64),
             'scales': scales}
    if 'sid' in [i.name for i in sess.get_inputs()]:
        feeds['sid'] = np.array([0], dtype=np.int64)
    audio = sess.run(None, feeds)[0].squeeze()
    audio = audio / max(1e-6, float(np.max(np.abs(audio))))
    place(track, audio, int(item['t'] * rate))
    report.append({'t': item['t'], 'seconds': round(len(audio) / rate, 2)})

peak = float(np.max(np.abs(track)))
if peak > 1.0:
    track /= peak
write_wav(out_path, track, rate)
print(json.dumps({'rate': rate, 'peak': round(peak, 3), 'lines': report}))
`;

export async function renderNarration(outFile, dir) {
  const lines = loadScript(dir);
  const duration = Number(process.env.NARRATION_DURATION || projectDuration(dir));
  const lengthScale = Number(process.env.NARRATION_LENGTH_SCALE || 1.0);

  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'axto-narasi-'));
  const planFile = path.join(tmp, 'plan.json');
  const script = path.join(tmp, 'synth.py');
  let stdout;

  if (ENGINE === 'coqui-id') {
    const modelDir = ensureIndonesianModel();
    fs.writeFileSync(planFile, JSON.stringify({
      duration, length_scale: lengthScale,
      lines: lines.map((l) => ({ t: l.t, text: l.text }))
    }));
    fs.writeFileSync(script, PY_COQUI);
    // config.json menyebut speakers.pth secara relatif, jadi dijalankan dari
    // dalam direktori modelnya.
    stdout = run('python3', [script, modelDir, ID_SPEAKER, planFile, outFile], { cwd: modelDir });
  } else {
    const voice = ensurePiperVoice();
    fs.writeFileSync(planFile, JSON.stringify({
      duration, length_scale: lengthScale,
      lines: lines.map((l) => ({ t: l.t, phonemes: phonemize(l.text) }))
    }));
    fs.writeFileSync(script, PY_PIPER);
    stdout = run('python3', [script, voice.onnx, voice.config, planFile, outFile]);
  }

  fs.rmSync(tmp, { recursive: true, force: true });
  return JSON.parse(stdout.trim().split('\n').pop());
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const out = process.argv[2] || path.join(OUT, 'satu-puncak-banyak-jalan-narasi.wav');
  const info = await renderNarration(out, process.argv[3] ? path.resolve(process.argv[3]) : undefined);
  console.log(`${path.basename(out)}  ${(fs.statSync(out).size / 1048576).toFixed(2)} MB  puncak=${info.peak}  mesin=${ENGINE}`);
  for (const l of info.lines) console.log(`  detik ${String(l.t).padStart(6)} → ${l.seconds}s`);
}
