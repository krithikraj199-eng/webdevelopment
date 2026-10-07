import { chromium } from 'playwright';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

async function main() {
  console.log('--- STARTING PRODUCTION PREVIEW SERVER ---');
  const previewProcess = spawn('npx', ['vite', 'preview', '--port', '4173'], {
    shell: true,
    stdio: 'pipe',
  });

  // Wait for server to start
  await new Promise((resolve) => setTimeout(resolve, 2500));

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
    { width: 768, height: 1024, name: '768x1024' },
    { width: 390, height: 844, name: '390x844' },
  ];

  let consoleErrors = [];
  let failedRequests = [];
  let imageStatus = null;

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });

    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(`[${vp.name}] ${msg.text()}`);
      }
    });

    page.on('response', resp => {
      if (resp.status() >= 400) {
        failedRequests.push(`[${vp.name}] ${resp.url()} -> ${resp.status()}`);
      }
      if (resp.url().includes('kiruthickraj-profile.jpg')) {
        imageStatus = {
          url: resp.url(),
          status: resp.status(),
          statusText: resp.statusText(),
          contentType: resp.headers()['content-type']
        };
      }
    });

    await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });

    // Inspect image element
    const imgInfo = await page.evaluate(() => {
      const img = document.querySelector('img[src="/kiruthickraj-profile.jpg"]');
      if (!img) return null;
      return {
        src: img.src,
        currentSrc: img.currentSrc,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        clientWidth: img.clientWidth,
        clientHeight: img.clientHeight,
        complete: img.complete,
        alt: img.alt,
      };
    });

    // Check horizontal scroll / overflow
    const overflow = await page.evaluate(() => {
      const docWidth = document.documentElement.scrollWidth;
      const winWidth = window.innerWidth;
      return {
        hasOverflow: docWidth > winWidth,
        scrollWidth: docWidth,
        innerWidth: winWidth,
      };
    });

    console.log(`Viewport ${vp.name}:`);
    console.log(`  Overflow: ${overflow.hasOverflow} (scroll: ${overflow.scrollWidth}, win: ${overflow.innerWidth})`);
    console.log(`  Image info:`, imgInfo);

    // Capture screenshot of About section
    const aboutElem = await page.$('#about');
    if (aboutElem) {
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });

      const screenshotPath = path.join(screenshotsDir, `about-portrait-${vp.name}.png`);
      await aboutElem.screenshot({ path: screenshotPath });
      console.log(`  Saved screenshot: ${screenshotPath}`);

      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });
    }

    await page.close();
  }

  await browser.close();
  previewProcess.kill();

  console.log('--- AUDIT REPORT ---');
  console.log('Image Network Status:', imageStatus);
  console.log('Failed Requests (404/500):', failedRequests.length, failedRequests);
  console.log('Console Errors:', consoleErrors.length, consoleErrors);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
