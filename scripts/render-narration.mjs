#!/usr/bin/env node
/*
 * Merender narasi suara untuk animasi.
 *
 * Cara kerjanya: naskah di public/animasi/narasi.js diubah menjadi fonem IPA
 * bahasa Indonesia oleh espeak-ng, lalu fonem itu disuarakan oleh model neural
 * VITS (Piper). Model Piper belum punya suara Indonesia, tetapi peta fonemnya
 * memakai IPA penuh — jadi urutan fonem Indonesia bisa dipakai apa adanya dan
 * pengucapannya tetap benar, dengan warna suara dari model yang dipilih.
 *
 *   node scripts/render-narration.mjs [keluaran.wav]
 *
 * Kebutuhan (hanya saat merender, bukan dependency aplikasi):
 *   - espeak-ng               → fonemisasi (apt-get install espeak-ng)
 *   - python3 + onnxruntime   → menjalankan model (pip install onnxruntime numpy)
 *   - model suara Piper       → lihat VOICE_URL di bawah; diunduh sekali lalu
 *                               disimpan di direktori cache
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'public', 'animasi');

const VOICE_URL =
  process.env.PIPER_VOICE_URL ||
  'https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/vits-piper-es_ES-davefx-medium.tar.bz2';
const VOICE_DIR = process.env.PIPER_VOICE_DIR ||
  path.join(os.tmpdir(), 'axto-piper-voice', 'vits-piper-es_ES-davefx-medium');
const VOICE_NAME = 'es_ES-davefx-medium';

function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { encoding: 'utf8', ...opts });
  if (r.status !== 0) {
    throw new Error(`${cmd} gagal (${r.status}): ${r.stderr || ''}`);
  }
  return r.stdout;
}

function ensureVoice() {
  const onnx = path.join(VOICE_DIR, `${VOICE_NAME}.onnx`);
  if (fs.existsSync(onnx)) return { onnx, config: `${onnx}.json` };
  const parent = path.dirname(VOICE_DIR);
  fs.mkdirSync(parent, { recursive: true });
  const tar = path.join(parent, 'voice.tar.bz2');
  process.stdout.write('Mengunduh model suara ...\n');
  run('curl', ['-sSL', '-o', tar, VOICE_URL]);
  run('tar', ['xjf', tar, '-C', parent]);
  fs.rmSync(tar, { force: true });
  if (!fs.existsSync(onnx)) throw new Error(`model tidak ditemukan setelah diekstrak: ${onnx}`);
  return { onnx, config: `${onnx}.json` };
}

/** Naskah + detik kemunculannya, dibaca langsung dari berkas yang dipakai web. */
function loadScript() {
  const src = fs.readFileSync(path.join(OUT, 'narasi.js'), 'utf8');
  const sandbox = {};
  // eslint-disable-next-line no-new-func
  new Function('globalThis', 'window', src)(sandbox, sandbox);
  if (!sandbox.AXTONarasi) throw new Error('naskah narasi tidak terbaca');
  return sandbox.AXTONarasi.LINES;
}

/**
 * Fonemisasi satu kalimat. Tanda baca dilepas dari teks lalu ditempelkan lagi
 * sebagai fonem tersendiri supaya jeda dan intonasinya terjaga.
 */
function phonemize(text) {
  const out = [];
  const parts = text.split(/([,.:;!?])/).filter((s) => s.trim() !== '');
  for (const part of parts) {
    if (/^[,.:;!?]$/.test(part)) {
      out.push(part);
      continue;
    }
    const ipa = run('espeak-ng', ['-q', '--ipa', '-v', 'id', part.trim()]).trim();
    for (const ch of Array.from(ipa)) out.push(ch);
    out.push(' ');
  }
  return out;
}

const PY = `
import json, sys, math
import numpy as np
import onnxruntime

model, config, plan_path, out_path = sys.argv[1:5]
cfg = json.load(open(config))
pid = cfg['phoneme_id_map']
rate = cfg['audio']['sample_rate']
inf = cfg.get('inference', {})
plan = json.load(open(plan_path))

# Fonem yang tidak ada di model diganti yang terdekat bunyinya.
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
    scales = np.array([
        inf.get('noise_scale', 0.667),
        plan.get('length_scale', 1.0),
        inf.get('noise_w', 0.8)
    ], dtype=np.float32)
    feeds = {'input': ids, 'input_lengths': np.array([ids.shape[1]], dtype=np.int64), 'scales': scales}
    if 'sid' in [i.name for i in sess.get_inputs()]:
        feeds['sid'] = np.array([0], dtype=np.int64)
    audio = sess.run(None, feeds)[0].squeeze()
    audio = audio / max(1e-6, np.max(np.abs(audio)))   # normalkan tiap kalimat
    start = int(item['t'] * rate)
    end = min(total, start + len(audio))
    fade = int(0.02 * rate)
    env = np.ones(len(audio), dtype=np.float32)
    env[:fade] = np.linspace(0, 1, fade)
    env[-fade:] = np.linspace(1, 0, fade)
    track[start:end] += (audio * env)[: end - start] * 0.9
    report.append({'t': item['t'], 'seconds': round(len(audio) / rate, 2)})

peak = float(np.max(np.abs(track)))
if peak > 1.0:
    track /= peak
pcm = (np.clip(track, -1, 1) * 32767).astype('<i2')

import struct
with open(out_path, 'wb') as f:
    data = pcm.tobytes()
    f.write(b'RIFF' + struct.pack('<I', 36 + len(data)) + b'WAVEfmt ')
    f.write(struct.pack('<IHHIIHH', 16, 1, 1, rate, rate * 2, 2, 16))
    f.write(b'data' + struct.pack('<I', len(data)))
    f.write(data)

print(json.dumps({'rate': rate, 'peak': round(peak, 3), 'lines': report}))
`;

export async function renderNarration(outFile) {
  const voice = ensureVoice();
  const lines = loadScript();
  const plan = {
    duration: Number(process.env.NARRATION_DURATION || 92),
    length_scale: Number(process.env.NARRATION_LENGTH_SCALE || 1.08), // sedikit lebih lambat = lebih tenang
    lines: lines.map((l) => ({ t: l.t, phonemes: phonemize(l.text) }))
  };

  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'axto-narasi-'));
  const planFile = path.join(tmp, 'plan.json');
  const script = path.join(tmp, 'synth.py');
  fs.writeFileSync(planFile, JSON.stringify(plan));
  fs.writeFileSync(script, PY);

  const stdout = run('python3', [script, voice.onnx, voice.config, planFile, outFile]);
  fs.rmSync(tmp, { recursive: true, force: true });
  return JSON.parse(stdout.trim().split('\n').pop());
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const out = process.argv[2] || path.join(OUT, 'satu-puncak-banyak-jalan-narasi.wav');
  const info = await renderNarration(out);
  console.log(`${path.basename(out)}  ${(fs.statSync(out).size / 1048576).toFixed(2)} MB  puncak=${info.peak}`);
  for (const l of info.lines) console.log(`  detik ${String(l.t).padStart(5)} → ${l.seconds}s`);
}
