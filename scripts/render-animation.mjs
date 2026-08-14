#!/usr/bin/env node
/*
 * Merender animasi canvas (public/animasi/anim.js) menjadi berkas video.
 *
 *   node scripts/render-animation.mjs              # MP4 + WebM + GIF + poster
 *   node scripts/render-animation.mjs --frames 3,12.5,24   # hanya cuplikan PNG (untuk cek visual)
 *
 * Kebutuhan: playwright (chromium) dan ffmpeg-static.
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const argvRaw = process.argv.slice(2);
function argOf(name, fallback) {
  const i = argvRaw.indexOf(name);
  return i >= 0 ? argvRaw[i + 1] : fallback;
}
const OUT = path.resolve(ROOT, argOf('--dir', 'public/animasi'));
const ENGINE = path.join(OUT, 'anim.js');
const base = argOf('--base', 'satu-puncak-banyak-jalan');

const require = createRequire(import.meta.url);

// Playwright & ffmpeg hanya dibutuhkan saat merender video, jadi sengaja tidak
// dijadikan dependency aplikasi. Ambil dari lokal, global, atau env.
async function loadChromium() {
  const candidates = [
    process.env.PLAYWRIGHT_MODULE,
    'playwright',
    'playwright-core',
    '/opt/node22/lib/node_modules/playwright/index.js',
    '/opt/node22/lib/node_modules/playwright-core/index.js'
  ].filter(Boolean);
  for (const c of candidates) {
    try {
      const m = await import(c);
      const chromium = m.chromium || (m.default && m.default.chromium);
      if (chromium) return chromium;
    } catch { /* coba kandidat berikutnya */ }
  }
  throw new Error('playwright tidak ditemukan. Jalankan: npm i -D playwright && npx playwright install chromium');
}

function ffmpegPath() {
  for (const p of [process.env.FFMPEG_PATH, tryResolve('ffmpeg-static')]) {
    if (p && fs.existsSync(p)) return p;
  }
  throw new Error('ffmpeg tidak ditemukan. Jalankan: npm i -D ffmpeg-static (atau set FFMPEG_PATH).');
}
function tryResolve(mod) {
  try { return require(mod); } catch { return null; }
}

function run(bin, args) {
  const r = spawnSync(bin, args, { stdio: ['ignore', 'inherit', 'inherit'] });
  if (r.status !== 0) throw new Error(`${path.basename(bin)} gagal (${r.status})`);
}

const argv = process.argv.slice(2);
const framesArg = argv.includes('--frames') ? argv[argv.indexOf('--frames') + 1] : null;
const scale = Number(argv.includes('--scale') ? argv[argv.indexOf('--scale') + 1] : 1);
// Beberapa halaman merender potongan frame masing-masing; Chromium menaruh tiap
// halaman di proses render sendiri, jadi inti CPU terpakai semua.
const workers = Math.max(1, Number(argOf('--workers', 3)));

const html = `<!doctype html><meta charset="utf-8">
<style>html,body{margin:0;background:#000}canvas{display:block}</style>
<canvas id="c"></canvas>
<script>${fs.readFileSync(ENGINE, 'utf8')}</script>
<script>
  const c = document.getElementById('c');
  c.width = AXTOAnim.W; c.height = AXTOAnim.H;
  const ctx = c.getContext('2d');
  window.frameAt = (t, jpeg) => {
    AXTOAnim.render(ctx, t);
    return jpeg ? c.toDataURL('image/jpeg', 0.94) : c.toDataURL('image/png');
  };
</script>`;

const chromium = await loadChromium();
const browser = await chromium.launch({ args: ['--force-color-profile=srgb', '--font-render-hinting=none'] });

async function newRenderPage() {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  return page;
}

const page = await newRenderPage();
const meta = await page.evaluate(() => ({ W: AXTOAnim.W, H: AXTOAnim.H, FPS: AXTOAnim.FPS, DURATION: AXTOAnim.DURATION }));

async function shoot(target, t, file, jpeg) {
  const dataUrl = await target.evaluate(([tt, j]) => window.frameAt(tt, j), [t, !!jpeg]);
  const prefix = jpeg ? 'data:image/jpeg;base64,' : 'data:image/png;base64,';
  fs.writeFileSync(file, Buffer.from(dataUrl.slice(prefix.length), 'base64'));
}

if (framesArg) {
  const dir = path.join(os.tmpdir(), 'axto-frames-preview');
  fs.mkdirSync(dir, { recursive: true });
  for (const t of framesArg.split(',').map(Number)) {
    const f = path.join(dir, `t${String(t).replace('.', '_')}.png`);
    await shoot(page, t, f, false);
    console.log(f);
  }
  await browser.close();
  process.exit(0);
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'axto-anim-'));
const total = Math.round(meta.DURATION * meta.FPS);
process.stdout.write(`Merender ${total} frame @ ${meta.W}x${meta.H} (${workers} pekerja) ...\n`);

let done = 0;
const chunk = Math.ceil(total / workers);
const pages = [page];
for (let k = 1; k < workers; k++) pages.push(await newRenderPage());

await Promise.all(pages.map(async (p, k) => {
  const from = k * chunk;
  const to = Math.min(total, from + chunk);
  for (let i = from; i < to; i++) {
    await shoot(p, i / meta.FPS, path.join(tmp, String(i).padStart(5, '0') + '.jpg'), true);
    done++;
    if (done % 60 === 0) process.stdout.write(`  frame ${done}/${total}\r`);
  }
}));
await browser.close();
process.stdout.write(`  frame ${total}/${total}\n`);

const ff = ffmpegPath();
const seq = path.join(tmp, '%05d.jpg');
const vf = scale === 1 ? [] : ['-vf', `scale=${Math.round(meta.W * scale)}:-2:flags=lanczos`];

// Musik latar: dirender dari public/animasi/score.js lewat Web Audio
const music = path.join(tmp, 'score.wav');
process.stdout.write('Merender musik ...\n');
const { renderAudio } = await import('./render-audio.mjs');
await renderAudio(music, OUT);

/* Narasi: butuh espeak-ng + python(onnxruntime) + model Piper. Bila salah satu
 * tidak tersedia, videonya tetap dibuat dengan musik saja. */
let wav = music;
try {
  process.stdout.write('Merender narasi ...\n');
  const { renderNarration } = await import('./render-narration.mjs');
  const voice = path.join(tmp, 'narasi.wav');
  await renderNarration(voice, OUT);
  run(ff, ['-y', '-i', voice, '-c:a', 'libmp3lame', '-b:a', '160k',
    path.join(OUT, `${base}-narasi.mp3`)]);

  // Campur: musik diturunkan otomatis saat narasi berbunyi (ducking)
  const mixed = path.join(tmp, 'mix.wav');
  run(ff, ['-y', '-i', music, '-i', voice, '-filter_complex',
    '[1:a]aformat=channel_layouts=stereo,volume=1.2,asplit=2[v1][v2];' +
    '[0:a]volume=0.8[bed];' +
    '[bed][v1]sidechaincompress=threshold=0.03:ratio=8:attack=25:release=700:makeup=1[ducked];' +
    '[ducked][v2]amix=inputs=2:duration=longest:normalize=0,alimiter=limit=0.89[mix]',
    '-map', '[mix]', mixed]);
  wav = mixed;
  run(ff, ['-y', '-i', mixed, '-c:a', 'libmp3lame', '-b:a', '176k',
    path.join(OUT, `${base}-audio.mp3`)]);
} catch (err) {
  process.stdout.write(`  narasi dilewati: ${err.message}\n`);
}

// MP4 (H.264 + AAC) — paling universal untuk diunduh & dibagikan
run(ff, ['-y', '-framerate', String(meta.FPS), '-i', seq, '-i', wav, ...vf,
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '19', '-pix_fmt', 'yuv420p',
  '-c:a', 'aac', '-b:a', '192k', '-shortest',
  '-movflags', '+faststart', path.join(OUT, `${base}.mp4`)]);

// WebM (VP9 + Opus) — alternatif ringan untuk web
run(ff, ['-y', '-framerate', String(meta.FPS), '-i', seq, '-i', wav, ...vf,
  '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '34', '-row-mt', '1',
  '-c:a', 'libopus', '-b:a', '128k', '-shortest',
  '-pix_fmt', 'yuv420p', path.join(OUT, `${base}.webm`)]);

// Trek musik terpisah, untuk pemutar canvas di halaman web
run(ff, ['-y', '-i', wav, '-c:a', 'libmp3lame', '-b:a', '160k',
  path.join(OUT, `${base}-musik.mp3`)]);

// GIF — untuk chat/dokumen yang tidak bisa memutar video
const palette = path.join(tmp, 'palette.png');
const gifFilter = 'fps=8,scale=600:-1:flags=lanczos';
run(ff, ['-y', '-framerate', String(meta.FPS), '-i', seq, '-vf', `${gifFilter},palettegen=max_colors=128:stats_mode=diff`, palette]);
run(ff, ['-y', '-framerate', String(meta.FPS), '-i', seq, '-i', palette,
  '-lavfi', `${gifFilter}[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=3:diff_mode=rectangle`,
  path.join(OUT, `${base}.gif`)]);

// Poster (dikompres ulang supaya ringan)
const posterAt = Number(argOf('--poster', Math.min(88, meta.DURATION - 4)));
const posterFrame = Math.round(posterAt * meta.FPS);
run(ff, ['-y', '-i', path.join(tmp, String(posterFrame).padStart(5, '0') + '.jpg'),
  '-compression_level', '100', path.join(OUT, `${base}-poster.png`)]);

fs.rmSync(tmp, { recursive: true, force: true });

for (const f of [`${base}.mp4`, `${base}.webm`, `${base}.gif`, `${base}-musik.mp3`, `${base}-poster.png`]) {
  const s = fs.statSync(path.join(OUT, f));
  console.log(`${f.padEnd(34)} ${(s.size / 1048576).toFixed(2)} MB`);
}
