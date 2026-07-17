/**
 * Deep-dive gallery capture for the Show Me Districts case study.
 * A multi-page Astro site, so each shot is a real route; map pages need extra
 * settle time for MapLibre tiles/layers. Output: public/images/showmedistricts/.
 *
 * Run with: node scripts/capture-showmedistricts.mjs
 */
import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'images', 'showmedistricts');
mkdirSync(outDir, { recursive: true });

const base = 'https://www.show-me-districts.com';
const shots = [
  { name: 'history', path: '/history' },
  { name: 'editor', path: '/editor' },
  { name: 'fair-maps', path: '/fair-maps' },
  { name: 'redistricting-2025', path: '/redistricting-2025' },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });

for (const { name, path } of shots) {
  console.log(`Capturing ${path} ...`);
  await page.goto(base + path, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3500); // MapLibre tiles + layer render
  await page.screenshot({ path: join(outDir, `${name}.jpg`), type: 'jpeg', quality: 88 });
  console.log(`  ✓ ${name}.jpg`);
}

await browser.close();
console.log('done');
