/**
 * Deep-dive gallery capture for the TDF-Tracker case study.
 * React SPA with in-app tab buttons (no per-tab URL), so we load once and
 * click each tab, capturing after charts/tables settle.
 * Output: public/images/tdftracker/.
 *
 * Run with: node scripts/capture-tdf.mjs
 */
import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'images', 'tdftracker');
mkdirSync(outDir, { recursive: true });

const tabs = [
  { label: 'Overview', name: 'overview' },
  { label: 'Stages', name: 'stages' },
  { label: 'Riders', name: 'riders' },
  { label: 'Value', name: 'value' },
  { label: 'My Team', name: 'my-team' },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await page.goto('https://mattsnively.github.io/TDF-tracker/', { waitUntil: 'networkidle', timeout: 45000 });
await page.waitForTimeout(2500);

for (const { label, name } of tabs) {
  await page.getByRole('button', { name: label, exact: true }).first().click();
  await page.waitForTimeout(1800);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({ path: join(outDir, `${name}.jpg`), type: 'jpeg', quality: 88 });
  console.log(`  ✓ ${name}.jpg`);
}

await browser.close();
console.log('done');
