/**
 * Deep-dive gallery capture for the Hawley Watch case study.
 * Multi-page Astro accountability site — each shot is a real route.
 * Output: public/images/hawleywatch/.
 *
 * Run with: node scripts/capture-hawleywatch.mjs
 */
import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'images', 'hawleywatch');
mkdirSync(outDir, { recursive: true });

const base = 'https://hawleywatch.com';
const shots = [
  { name: 'home', path: '/' },
  { name: 'voting-record', path: '/voting-record' },
  { name: 'money-trail', path: '/money-trail' },
  { name: 'impact', path: '/impact' },
  { name: 'credit', path: '/credit' },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });

for (const { name, path } of shots) {
  console.log(`Capturing ${path} ...`);
  await page.goto(base + path, { waitUntil: 'networkidle', timeout: 45000 });
  await page.waitForTimeout(1800);
  await page.screenshot({ path: join(outDir, `${name}.jpg`), type: 'jpeg', quality: 88 });
  console.log(`  ✓ ${name}.jpg`);
}

await browser.close();
console.log('done');
