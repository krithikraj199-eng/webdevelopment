import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const FINAL_AUDIT_DIR = path.resolve('screenshots', 'final-audit');
if (!fs.existsSync(FINAL_AUDIT_DIR)) {
  fs.mkdirSync(FINAL_AUDIT_DIR, { recursive: true });
}

async function runAudit() {
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch {
    try {
      browser = await chromium.launch({ channel: 'msedge', headless: true });
    } catch {
      browser = await chromium.launch({ channel: 'chrome', headless: true });
    }
  }

  const results = {
    consoleErrors: [],
    consoleWarnings: [],
    failedRequests: [],
    cgpaCheck: {},
    placeholders: [],
    viewports: {},
    screenshots: {},
    tenElements: {},
  };

  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // Listen to console errors and network failures
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      results.consoleErrors.push(msg.text());
    } else if (msg.type() === 'warning') {
      results.consoleWarnings.push(msg.text());
    }
  });

  page.on('requestfailed', (req) => {
    results.failedRequests.push({
      url: req.url(),
      errorText: req.failure()?.errorText,
    });
  });

  console.log('Navigating to http://localhost:4173 ...');
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });

  // 1. CGPA Verification
  const pageText = await page.content();
  const has847 = pageText.includes('8.47');
  const has843 = pageText.includes('8.43');
  results.cgpaCheck = {
    contains847: has847,
    contains843: has843,
    status: has847 && !has843 ? 'PASSED (8.47 verified, 8.43 eliminated)' : 'FAILED',
  };
  console.log(`CGPA Check: ${results.cgpaCheck.status}`);

  // 2. Ten elements order verification
  const elements = [
    { name: 'Navbar', selector: 'header' },
    { name: 'Hero', selector: '#hero' },
    { name: 'Selected Work', selector: '#work' },
    { name: 'About', selector: '#about' },
    { name: 'Capabilities', selector: '#capabilities' },
    { name: 'Experience', selector: '#experience' },
    { name: 'Education', selector: '#education' },
    { name: 'Credentials & Involvement', selector: '#credentials' },
    { name: 'Contact', selector: '#contact' },
    { name: 'Footer', selector: 'footer' },
  ];

  let orderCorrect = true;
  let prevY = -1;
  for (const el of elements) {
    const handle = await page.$(el.selector);
    const exists = handle !== null;
    results.tenElements[el.name] = exists;
    if (exists) {
      const box = await handle.boundingBox();
      if (box) {
        if (box.y < prevY) orderCorrect = false;
        prevY = box.y;
      }
    } else {
      orderCorrect = false;
    }
  }
  results.tenElementsOrder = orderCorrect;
  console.log(`10 Elements Hierarchy: ${orderCorrect ? 'CONFIRMED IN EXACT ORDER' : 'FAILED'}`);

  // 3. Viewport Audits (All 10 viewports requested in prompt)
  const viewports = [
    { width: 1920, height: 1080, name: 'desktop_1920x1080' },
    { width: 1440, height: 900, name: 'desktop_1440x900' },
    { width: 1366, height: 768, name: 'laptop_1366x768' },
    { width: 1280, height: 800, name: 'laptop_1280x800' },
    { width: 1024, height: 768, name: 'desktop_1024x768' },
    { width: 768, height: 1024, name: 'tablet_768x1024' },
    { width: 430, height: 932, name: 'mobile_430x932' },
    { width: 390, height: 844, name: 'mobile_390x844' },
    { width: 375, height: 812, name: 'mobile_375x812' },
    { width: 360, height: 800, name: 'mobile_360x800' },
  ];

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.waitForTimeout(200);

    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    results.viewports[vp.name] = {
      width: vp.width,
      height: vp.height,
      hasHorizontalOverflow: overflow,
      passed: !overflow,
    };
    console.log(`Viewport ${vp.name} (${vp.width}x${vp.height}): Overflow = ${overflow ? 'FAIL' : 'PASS (0 overflow)'}`);
  }

  // 4. Capture Final Audit Screenshots
  // Full page shots
  const fullPageConfigs = [
    { width: 1920, height: 1080, file: '1920x1080_full.png' },
    { width: 1440, height: 900, file: '1440x900_full.png' },
    { width: 768, height: 1024, file: '768x1024_full.png' },
    { width: 390, height: 844, file: '390x844_full.png' },
    { width: 375, height: 812, file: '375x812_full.png' },
  ];

  for (const cfg of fullPageConfigs) {
    await page.setViewportSize({ width: cfg.width, height: cfg.height });
    await page.waitForTimeout(300);
    const shotPath = path.join(FINAL_AUDIT_DIR, cfg.file);
    await page.screenshot({ path: shotPath, fullPage: true });
    results.screenshots[cfg.file] = shotPath;
    console.log(`Saved screenshot: ${shotPath}`);
  }

  // Focused screenshots at 1440x900
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(200);

  // Hero focused
  const heroEl = await page.$('#hero');
  if (heroEl) {
    const heroShot = path.join(FINAL_AUDIT_DIR, 'hero_desktop.png');
    await heroEl.screenshot({ path: heroShot });
    results.screenshots.hero = heroShot;
    console.log(`Saved focused screenshot: ${heroShot}`);
  }

  // Selected Work focused
  const workEl = await page.$('#work');
  if (workEl) {
    const workShot = path.join(FINAL_AUDIT_DIR, 'selected_work_desktop.png');
    await workEl.screenshot({ path: workShot });
    results.screenshots.selectedWork = workShot;
    console.log(`Saved focused screenshot: ${workShot}`);
  }

  // Contact + Footer focused
  const contactEl = await page.$('#contact');
  if (contactEl) {
    const contactShot = path.join(FINAL_AUDIT_DIR, 'contact_footer_desktop.png');
    // Scroll down to contact
    await page.evaluate(() => document.getElementById('contact')?.scrollIntoView());
    await page.waitForTimeout(500);
    await page.screenshot({ path: contactShot });
    results.screenshots.contactFooter = contactShot;
    console.log(`Saved focused screenshot: ${contactShot}`);
  }

  console.log('\n--- AUDIT COMPLETE ---');
  console.log(JSON.stringify(results, null, 2));

  await browser.close();
}

runAudit().catch((err) => {
  console.error('Audit failed:', err);
  process.exit(1);
});
