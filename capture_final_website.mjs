import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve('screenshots', 'final-website');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function captureAll() {
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
    failedRequests: [],
    overflowResults: {},
    screenshots: {},
    cgpaStatus: '',
  };

  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  page.on('console', (msg) => {
    if (msg.type() === 'error') results.consoleErrors.push(msg.text());
  });

  page.on('requestfailed', (req) => {
    results.failedRequests.push({ url: req.url(), errorText: req.failure()?.errorText });
  });

  console.log('Navigating to http://localhost:4173 ...');
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });

  // Verify CGPA in DOM
  const pageHtml = await page.content();
  const has847 = pageHtml.includes('8.47');
  const has843 = pageHtml.includes('8.43');
  results.cgpaStatus = has847 && !has843 ? 'PASSED (8.47 / 10 confirmed, 8.43 absent)' : 'FAILED';
  console.log(`CGPA Check: ${results.cgpaStatus}`);

  // 1. Full-page viewports requested in prompt
  const fullPageConfigs = [
    { width: 1920, height: 1080, file: '1920x1080_full.png' },
    { width: 1440, height: 900, file: '1440x900_full.png' },
    { width: 1366, height: 768, file: '1366x768_full.png' },
    { width: 768, height: 1024, file: '768x1024_full.png' },
    { width: 430, height: 932, file: '430x932_full.png' },
    { width: 390, height: 844, file: '390x844_full.png' },
    { width: 375, height: 812, file: '375x812_full.png' },
  ];

  for (const cfg of fullPageConfigs) {
    await page.setViewportSize({ width: cfg.width, height: cfg.height });
    await page.waitForTimeout(300);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    results.overflowResults[cfg.file] = {
      width: cfg.width,
      height: cfg.height,
      hasOverflow: overflow,
      status: overflow ? 'FAIL' : 'PASS',
    };

    const outPath = path.join(OUT_DIR, cfg.file);
    await page.screenshot({ path: outPath, fullPage: true });
    results.screenshots[cfg.file] = outPath;
    console.log(`Saved: ${outPath} (Overflow: ${overflow ? 'FAIL' : 'PASS'})`);
  }

  // 2. Focused Screenshots at 1440 width
  // Reset viewport
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(300);

  // A. Hero
  const heroEl = await page.$('#hero');
  if (heroEl) {
    const p = path.join(OUT_DIR, 'hero.png');
    await heroEl.screenshot({ path: p });
    results.screenshots['hero.png'] = p;
    console.log(`Saved: ${p}`);
  }

  // B. Selected Work
  const workEl = await page.$('#work');
  if (workEl) {
    const p = path.join(OUT_DIR, 'selected-work.png');
    await workEl.screenshot({ path: p });
    results.screenshots['selected-work.png'] = p;
    console.log(`Saved: ${p}`);
  }

  // C. About + Capabilities
  const aboutEl = await page.$('#about');
  const capEl = await page.$('#capabilities');
  if (aboutEl && capEl) {
    const aboutBox = await aboutEl.boundingBox();
    const capBox = await capEl.boundingBox();
    const combinedHeight = Math.ceil(aboutBox.height + capBox.height) + 120;

    await page.setViewportSize({ width: 1440, height: combinedHeight });
    await page.evaluate(() => document.getElementById('about')?.scrollIntoView());
    await page.waitForTimeout(400);

    const newAbout = await aboutEl.boundingBox();
    const newCap = await capEl.boundingBox();
    const p = path.join(OUT_DIR, 'about-capabilities.png');
    await page.screenshot({
      path: p,
      clip: {
        x: 0,
        y: Math.max(0, Math.floor(newAbout.y)),
        width: 1440,
        height: Math.ceil(newCap.y + newCap.height - newAbout.y),
      },
    });
    results.screenshots['about-capabilities.png'] = p;
    console.log(`Saved: ${p}`);
  }

  // D. Experience + Education
  const expEl = await page.$('#experience');
  const eduEl = await page.$('#education');
  if (expEl && eduEl) {
    const expBox = await expEl.boundingBox();
    const eduBox = await eduEl.boundingBox();
    const combinedHeight = Math.ceil(expBox.height + eduBox.height) + 120;

    await page.setViewportSize({ width: 1440, height: combinedHeight });
    await page.evaluate(() => document.getElementById('experience')?.scrollIntoView());
    await page.waitForTimeout(400);

    const newExp = await expEl.boundingBox();
    const newEdu = await eduEl.boundingBox();
    const p = path.join(OUT_DIR, 'experience-education.png');
    await page.screenshot({
      path: p,
      clip: {
        x: 0,
        y: Math.max(0, Math.floor(newExp.y)),
        width: 1440,
        height: Math.ceil(newEdu.y + newEdu.height - newExp.y),
      },
    });
    results.screenshots['experience-education.png'] = p;
    console.log(`Saved: ${p}`);
  }

  // E. Credentials
  const credEl = await page.$('#credentials');
  if (credEl) {
    const p = path.join(OUT_DIR, 'credentials.png');
    await credEl.screenshot({ path: p });
    results.screenshots['credentials.png'] = p;
    console.log(`Saved: ${p}`);
  }

  // F. Contact + Footer
  const contactEl = await page.$('#contact');
  const footerEl = await page.$('footer');
  if (contactEl && footerEl) {
    const contactBox = await contactEl.boundingBox();
    const footerBox = await footerEl.boundingBox();
    const combinedHeight = Math.ceil(contactBox.height + footerBox.height) + 120;

    await page.setViewportSize({ width: 1440, height: combinedHeight });
    await page.evaluate(() => document.getElementById('contact')?.scrollIntoView());
    await page.waitForTimeout(400);

    const newContact = await contactEl.boundingBox();
    const newFooter = await footerEl.boundingBox();
    const p = path.join(OUT_DIR, 'contact-footer.png');
    await page.screenshot({
      path: p,
      clip: {
        x: 0,
        y: Math.max(0, Math.floor(newContact.y)),
        width: 1440,
        height: Math.ceil(newFooter.y + newFooter.height - newContact.y),
      },
    });
    results.screenshots['contact-footer.png'] = p;
    console.log(`Saved: ${p}`);
  }

  console.log('\n--- FINAL WEBSITE AUDIT & CAPTURE COMPLETE ---');
  console.log(JSON.stringify(results, null, 2));

  await browser.close();
}

captureAll().catch((err) => {
  console.error('Capture failed:', err);
  process.exit(1);
});
