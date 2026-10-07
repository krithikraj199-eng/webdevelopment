import { chromium } from 'playwright';
import fs from 'fs';

async function audit() {
  if (!fs.existsSync('scratch/audit')) {
    fs.mkdirSync('scratch/audit', { recursive: true });
  }

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (err) {
    try {
      browser = await chromium.launch({ channel: 'msedge', headless: true });
    } catch (e2) {
      browser = await chromium.launch({ channel: 'chrome', headless: true });
    }
  }

  const viewports = [
    { name: 'desktop_1440x900', width: 1440, height: 900 },
    { name: 'desktop_1280x800', width: 1280, height: 800 },
    { name: 'laptop_1024x768', width: 1024, height: 768 },
    { name: 'tablet_768x1024', width: 768, height: 1024 },
    { name: 'mobile_390x844', width: 390, height: 844 },
    { name: 'mobile_375x812', width: 375, height: 812 }
  ];

  const results = [];

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

    // Check horizontal overflow
    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);

    // Check structure
    const h1Text = await page.innerText('h1');
    const workHeading = await page.innerText('#work h2');
    const aboutHeading = await page.innerText('#about h2');
    const capHeading = await page.innerText('#capabilities h2');
    const expHeading = await page.innerText('#experience h2');
    const pageContent = await page.content();

    const hasFooter = (await page.$('footer')) !== null;
    const hasEducation = (await page.$('#education')) !== null;
    const hasContact = (await page.$('#contact')) !== null;
    const hasCertifications = (await page.$('#certifications')) !== null;
    const hasAchievements = (await page.$('#achievements')) !== null;

    let eduHeading = '';
    if (hasEducation) {
      eduHeading = (await page.innerText('#education h2')).trim();
    }

    const hasInternship = pageContent.includes('Study Shinee Software Solution') && pageContent.includes('25 Days');
    const hasCollab1 = pageContent.includes('Business Entity Resolution System');
    const hasCollab2 = pageContent.includes('PackGuard AI');
    const hasDayflow = pageContent.includes('DAYFLOW'); // Should be false!

    const hasCredentials = (await page.$('#credentials')) !== null;
    let credHeading = '';
    if (hasCredentials) {
      credHeading = (await page.innerText('#credentials h2')).trim();
    }

    const hasBTech = pageContent.includes('V.S.B College of Engineering Technical Campus') && pageContent.includes('CGPA: 8.47 / 10');
    const hasHSC = pageContent.includes('Palani Gounder Higher Secondary School, Pollachi') && pageContent.includes('86.3%');
    const hasSSLC = pageContent.includes('Government Higher Secondary School, Ramanathapuram') && pageContent.includes('73.4%');

    const hasJavaCred = pageContent.includes('Java Object-Oriented Programming') && pageContent.includes('Udemy') && pageContent.includes('2025');
    const hasCSI = pageContent.includes('Computer Society of India (CSI)') && pageContent.includes('Member');
    const hasPackGuardExpo = pageContent.includes('PackGuard AI') && pageContent.includes('College Project Expo · Team Project');

    // Excluded items check
    const hasCodeVita = pageContent.includes('CodeVita');
    const hasMLSA = pageContent.includes('Microsoft Learn Student Ambassador');
    const hasGDG = pageContent.includes('Google Developer');
    const hasGenericHackathon = pageContent.includes('Collegiate Hackathons & Symposia') || pageContent.includes('Engineering Hackathons & Technical Symposia');

    const screenshotPath = `scratch/audit/${vp.name}_full.png`;
    await page.screenshot({ path: screenshotPath, fullPage: true });

    results.push({
      viewport: vp.name,
      width: vp.width,
      scrollWidth,
      hasHorizontalOverflow: overflow,
      h1: h1Text.trim(),
      workHeading: workHeading.trim(),
      aboutHeading: aboutHeading.trim(),
      capHeading: capHeading.trim(),
      expHeading: expHeading.trim(),
      eduHeading,
      credHeading,
      hasInternship,
      hasCollab1,
      hasCollab2,
      hasDayflow,
      hasBTech,
      hasHSC,
      hasSSLC,
      hasCredentials,
      hasJavaCred,
      hasCSI,
      hasPackGuardExpo,
      hasCodeVita,
      hasMLSA,
      hasGDG,
      hasGenericHackathon,
      hasFooter,
      hasEducation,
      hasContact,
      screenshot: screenshotPath
    });

    await page.close();
  }

  console.log('AUDIT_RESULTS:', JSON.stringify(results, null, 2));

  await browser.close();
}

audit().catch((err) => {
  console.error('Audit failed:', err);
  process.exit(1);
});
