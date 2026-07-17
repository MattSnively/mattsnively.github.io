/**
 * Deep-dive gallery capture for the CarsAndBids Analyzer case study.
 * The dashboard is a React SPA that switches views via in-app tab state (no
 * per-tab URLs), so we load once and click each tab, capturing after charts
 * settle. Output: public/images/carsandbids/<tab>.jpg at 1440x900.
 *
 * This is the per-project pattern the other case studies will follow: one
 * manifest of shots, deep-linked into the specific views worth showing.
 *
 * Run with: node scripts/capture-carsandbids.mjs
 */
import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'images', 'carsandbids');
mkdirSync(outDir, { recursive: true });

const URL = 'https://mattsnively.github.io/CarsAndBidsData/';
const tabs = ['Overview', 'Trends', 'Listings', 'Compare', 'Insights'];

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

console.log(`Loading ${URL} ...`);
await page.goto(URL, { waitUntil: 'networkidle', timeout: 45000 });
await page.waitForTimeout(2000); // initial data load + first chart render

for (const tab of tabs) {
  // Tabs render as buttons with the tab name as their text
  const btn = page.getByRole('button', { name: tab, exact: true }).first();
  await btn.click();
  await page.waitForTimeout(1800); // let the tab's charts animate in
  const dest = join(outDir, `${tab.toLowerCase()}.jpg`);
  await page.screenshot({ path: dest, type: 'jpeg', quality: 88 });
  console.log(`  ✓ ${tab.toLowerCase()}.jpg`);
}

await browser.close();
console.log('done');
