/**
 * Captures hero screenshots of live project sites for portfolio card thumbnails.
 * Output: public/images/*.jpg at 1280x720 (16:9, matches card aspect-video ratio).
 * Run with: node scripts/capture-screenshots.mjs
 */

import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '..', 'public', 'images');

const sites = [
  { filename: 'carsandbids.jpg',     url: 'https://mattsnively.github.io/CarsAndBidsData/' },
  { filename: 'showmedistricts.jpg', url: 'https://www.show-me-districts.com/' },
  { filename: 'hawleywatch.jpg',     url: 'https://hawleywatch.com' },
  { filename: 'ffrc.jpg',            url: 'https://mattsnively.github.io/FF-RC/' },
];

const browser = await chromium.launch();
const page = await browser.newPage();

// 16:9 viewport — matches the card's aspect-video class exactly
await page.setViewportSize({ width: 1280, height: 720 });

for (const { filename, url } of sites) {
  console.log(`Capturing ${url}...`);
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

  // Brief pause for any JS-driven rendering (maps, charts, etc.)
  await page.waitForTimeout(1500);

  const dest = join(outputDir, filename);
  await page.screenshot({ path: dest, type: 'jpeg', quality: 90 });
  console.log(`  ✓ Saved ${filename}`);
}

await browser.close();
console.log('\nAll screenshots captured.');
