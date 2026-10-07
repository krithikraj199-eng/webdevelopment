import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function main() {
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch {
    browser = await chromium.launch({ channel: 'msedge', headless: true });
  }

  const screenshotsDir = path.resolve('screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const viewports = [
    { width: 1440, height: 900, name: '1440x900' },
    { width: 1280, height: 800, name: '1280x800' },
    { width: 1024, height: 768, name: '1024x768' },
    { width: 768, height: 1024, name: '768x1024' },
    { width: 430, height: 932, name: '430x932' },
    { width: 390, height: 844, name: '390x844' },
    { width: 375, height: 812, name: '375x812' },
    { width: 360, height: 800, name: '360x800' },
  ];

  console.log('--- AUDITING VIEWPORTS & CAPTURING ABOUT SECTION ---');

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });

    // Check horizontal scroll / overflow
    const overflow = await page.evaluate(() => {
      const docWidth = document.documentElement.scrollWidth;
      const winWidth = window.innerWidth;
      return {
        hasOverflow: docWidth > winWidth,
        scrollWidth: docWidth,
        innerWidth: winWidth,
        diff: docWidth - winWidth
      };
    });

    console.log(`Viewport ${vp.name}: overflow = ${overflow.hasOverflow} (scroll: ${overflow.scrollWidth}, win: ${overflow.innerWidth})`);

    // Verify About section & portrait
    const aboutElem = await page.$('#about');
    if (!aboutElem) {
      console.error(`ERROR: #about section not found on ${vp.name}`);
    }

    // Capture focused screenshot for key viewports
    if (['1440x900', '768x1024', '390x844'].includes(vp.name)) {
      // Temporarily hide fixed/sticky header so element screenshot is pristine
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });

      const screenshotPath = path.join(screenshotsDir, `about-portrait-${vp.name}.png`);
      await aboutElem.screenshot({ path: screenshotPath });
      console.log(`Saved About screenshot: ${screenshotPath}`);

      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });
    }

    await page.close();
  }

  await browser.close();
  console.log('--- AUDIT COMPLETE ---');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
