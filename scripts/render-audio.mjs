#!/usr/bin/env node
/*
 * Merender skor musik (public/animasi/score.js) menjadi WAV memakai
 * OfflineAudioContext di dalam Chromium — hasilnya deterministik dan bisa
 * langsung digabungkan ke video oleh scripts/render-animation.mjs.
 *
 *   node scripts/render-audio.mjs [berkas-keluaran.wav]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'public', 'animasi');

export async function loadChromium() {
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

function wavFromChannels(left, right, sampleRate) {
  const frames = left.length;
  const bytes = frames * 2 * 2; // 16-bit stereo
  const buf = Buffer.alloc(44 + bytes);
  buf.write('RIFF', 0);
  buf.writeUInt32LE(36 + bytes, 4);
  buf.write('WAVE', 8);
  buf.write('fmt ', 12);
  buf.writeUInt32LE(16, 16);
  buf.writeUInt16LE(1, 20);
  buf.writeUInt16LE(2, 22);
  buf.writeUInt32LE(sampleRate, 24);
  buf.writeUInt32LE(sampleRate * 4, 28);
  buf.writeUInt16LE(4, 32);
  buf.writeUInt16LE(16, 34);
  buf.write('data', 36);
  buf.writeUInt32LE(bytes, 40);
  let o = 44;
  for (let i = 0; i < frames; i++) {
    for (const ch of [left, right]) {
      const s = Math.max(-1, Math.min(1, ch[i]));
      buf.writeInt16LE(Math.round(s * 32767), o);
      o += 2;
    }
  }
  return buf;
}

export async function renderAudio(outFile) {
  const chromium = await loadChromium();
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const html = `<!doctype html><meta charset="utf-8">
<script>${fs.readFileSync(path.join(OUT, 'anim.js'), 'utf8')}</script>
<script>${fs.readFileSync(path.join(OUT, 'score.js'), 'utf8')}</script>`;
  await page.setContent(html, { waitUntil: 'load' });

  const { channels, sampleRate } = await page.evaluate(async () => {
    const rate = 44100;
    const seconds = AXTOAnim.DURATION;
    const ctx = new OfflineAudioContext(2, Math.ceil(rate * seconds), rate);
    AXTOScore.build(ctx, seconds);
    const rendered = await ctx.startRendering();
    return {
      sampleRate: rendered.sampleRate,
      channels: [
        Array.from(rendered.getChannelData(0)),
        Array.from(rendered.getChannelData(1))
      ]
    };
  });

  await browser.close();
  const wav = wavFromChannels(channels[0], channels[1], sampleRate);
  fs.writeFileSync(outFile, wav);
  return outFile;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const out = process.argv[2] || path.join(OUT, 'satu-puncak-banyak-jalan.wav');
  await renderAudio(out);
  const s = fs.statSync(out);
  console.log(`${path.basename(out)}  ${(s.size / 1048576).toFixed(2)} MB`);
}
