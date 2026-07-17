/**
 * Deep-dive gallery capture for the Reality Check (FF-RC) case study.
 * A single-page scrollytelling React piece, so we capture the hero, then scroll
 * each key section heading to the top and shoot the viewport once its charts
 * settle. Output: public/images/ffrc/.
 *
 * Run with: node scripts/capture-ffrc.mjs
 */
import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'images', 'ffrc');
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await page.goto('https://mattsnively.github.io/FF-RC/', { waitUntil: 'networkidle', timeout: 45000 });
await page.waitForTimeout(2500);

// Hero (initial view)
await page.screenshot({ path: join(outDir, 'hero.jpg'), type: 'jpeg', quality: 88 });
console.log('  ✓ hero.jpg');

// Scroll each section heading to the top of the viewport, let charts animate, shoot
const sections = [
  { name: 'dead-zone', heading: /mid-round dead zone/i },
  { name: 'positional', heading: /Where ESPN misses most/i },
  { name: 'booms-busts', heading: /Booms & busts, ranked/i },
  { name: 'data-room', heading: /Week by week, player by player/i },
];

for (const { name, heading } of sections) {
  const el = page.getByText(heading).first();
  await el.evaluate((node) => node.scrollIntoView({ block: 'start', behavior: 'instant' }));
  await page.evaluate(() => window.scrollBy(0, -70)); // breathing room above the heading
  await page.waitForTimeout(1800);
  await page.screenshot({ path: join(outDir, `${name}.jpg`), type: 'jpeg', quality: 88 });
  console.log(`  ✓ ${name}.jpg`);
}

await browser.close();
console.log('done');
