import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = path.resolve('screenshots');
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function runVerification() {
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
    all10ElementsInOrder: false,
    tenElements: {},
    navigationTests: {},
    links: {},
    placeholders: [],
    viewports: {},
    screenshots: {},
  };

  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:4173 ...');
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });

  // 1. Verify 10 elements in exact page order:
  // 1. Navbar (header)
  // 2. Hero (#hero)
  // 3. Selected Work (#work)
  // 4. About (#about)
  // 5. Capabilities (#capabilities)
  // 6. Experience (#experience)
  // 7. Education (#education)
  // 8. Credentials & Involvement (#credentials)
  // 9. Contact (#contact)
  // 10. Footer (footer)
  const expectedOrder = [
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
  let previousY = -1;
  for (const item of expectedOrder) {
    const el = await page.$(item.selector);
    const exists = el !== null;
    results.tenElements[item.name] = exists;

    if (exists) {
      const box = await el.boundingBox();
      if (box) {
        console.log(`[Order Check] ${item.name} at Y=${box.y}`);
        if (box.y < previousY) {
          orderCorrect = false;
        }
        previousY = box.y;
      }
    } else {
      orderCorrect = false;
    }
  }
  results.all10ElementsInOrder = orderCorrect;
  console.log(`All 10 Elements Present & In Order: ${orderCorrect ? 'CONFIRMED' : 'FAILED'}`);

  // 2. Navbar Section Navigation tests
  const navTargets = [
    { name: 'Work', selector: 'nav a[href="#work"]', target: '#work' },
    { name: 'About', selector: 'nav a[href="#about"]', target: '#about' },
    { name: 'Capabilities', selector: 'nav a[href="#capabilities"]', target: '#capabilities' },
    { name: 'Experience', selector: 'nav a[href="#experience"]', target: '#experience' },
    { name: 'Contact', selector: 'nav a[href="#contact"]', target: '#contact' },
  ];

  for (const nav of navTargets) {
    console.log(`Clicking Navbar ${nav.name} (${nav.selector})...`);
    await page.click(nav.selector);
    // Wait for smooth scroll animation to settle
    await page.waitForTimeout(1500);

    const inView = await page.$eval(nav.target, (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    });
    results.navigationTests[nav.name] = {
      target: nav.target,
      inView,
      status: inView ? 'PASSED' : 'FAILED',
    };
    console.log(`Navbar ${nav.name} navigation -> ${nav.target}: ${inView ? 'PASSED' : 'FAILED'}`);
  }

  // 3. Back to Top verification
  console.log('Testing Footer Back to Top link...');
  const backToTopLink = await page.$('footer a[href="#top"]');
  if (backToTopLink) {
    await backToTopLink.click();
    await page.waitForTimeout(1800);
    const scrollY = await page.evaluate(() => window.scrollY);
    results.navigationTests['Back to Top'] = {
      finalScrollY: scrollY,
      status: scrollY <= 10 ? 'PASSED' : 'FAILED',
    };
    console.log(`Back to top scroll position: ${scrollY} (status: ${scrollY <= 10 ? 'PASSED' : 'FAILED'})`);
  }

  // 4. External Link and Contact Destination Verification
  const confirmedEmail = 'krithikraj199@gmail.com';
  const confirmedLinkedIn = 'https://www.linkedin.com/in/kiruthickraj-t-235463351/';
  const confirmedGitHub = 'https://github.com/krithikraj199-eng';
  const confirmedResume = 'https://docs.google.com/document/d/1AQPj7Lywj0vHGboyZ8fzBpQmEDx06XCL/edit?usp=drive_link&ouid=111040994964645325880&rtpof=true&sd=true';

  // Email
  const emailEl = await page.$('#contact a[href^="mailto:"]');
  const emailHref = emailEl ? await emailEl.getAttribute('href') : null;
  results.links.email = {
    href: emailHref,
    valid: emailHref === `mailto:${confirmedEmail}`,
  };

  // LinkedIn
  const linkedinEl = await page.$(`#contact a[href="${confirmedLinkedIn}"]`);
  const linkedinTarget = linkedinEl ? await linkedinEl.getAttribute('target') : null;
  const linkedinRel = linkedinEl ? await linkedinEl.getAttribute('rel') : null;
  results.links.linkedin = {
    found: !!linkedinEl,
    target: linkedinTarget,
    rel: linkedinRel,
    valid: !!linkedinEl && linkedinTarget === '_blank' && linkedinRel?.includes('noopener'),
  };

  // GitHub
  const githubEl = await page.$(`#contact a[href="${confirmedGitHub}"]`);
  const githubTarget = githubEl ? await githubEl.getAttribute('target') : null;
  const githubRel = githubEl ? await githubEl.getAttribute('rel') : null;
  results.links.github = {
    found: !!githubEl,
    target: githubTarget,
    rel: githubRel,
    valid: !!githubEl && githubTarget === '_blank' && githubRel?.includes('noopener'),
  };

  // Resume in Contact
  const resumeContactEl = await page.$(`#contact a[href="${confirmedResume}"]`);
  const resumeContactTarget = resumeContactEl ? await resumeContactEl.getAttribute('target') : null;
  const resumeContactRel = resumeContactEl ? await resumeContactEl.getAttribute('rel') : null;
  results.links.resumeContact = {
    found: !!resumeContactEl,
    target: resumeContactTarget,
    rel: resumeContactRel,
    valid: !!resumeContactEl && resumeContactTarget === '_blank' && resumeContactRel?.includes('noopener'),
  };

  // Resume in Navbar
  const resumeNavEl = await page.$(`header a[href="${confirmedResume}"]`);
  const resumeNavTarget = resumeNavEl ? await resumeNavEl.getAttribute('target') : null;
  const resumeNavRel = resumeNavEl ? await resumeNavEl.getAttribute('rel') : null;
  results.links.resumeNavbar = {
    found: !!resumeNavEl,
    target: resumeNavTarget,
    rel: resumeNavRel,
    valid: !!resumeNavEl && resumeNavTarget === '_blank' && resumeNavRel?.includes('noopener'),
  };

  // 5. Placeholder / Dummy URL audits
  const hashLinks = await page.$$('a[href="#"]');
  if (hashLinks.length > 0) results.placeholders.push(`Found ${hashLinks.length} href="#" links`);

  const pageHtml = await page.content();
  if (pageHtml.includes('example.com')) results.placeholders.push('Found example.com');
  if (pageHtml.includes('dummy')) results.placeholders.push('Found dummy text');
  if (pageHtml.includes('placeholder')) results.placeholders.push('Found placeholder text');
  if (pageHtml.includes('linkedin.com/in/username')) results.placeholders.push('Found placeholder LinkedIn');
  if (pageHtml.includes('github.com/username')) results.placeholders.push('Found placeholder GitHub');

  // 6. Viewport Overflow Audits
  const viewports = [
    { width: 1440, height: 900, name: 'desktop_1440x900' },
    { width: 1280, height: 800, name: 'desktop_1280x800' },
    { width: 1024, height: 768, name: 'desktop_1024x768' },
    { width: 768, height: 1024, name: 'tablet_768x1024' },
    { width: 390, height: 844, name: 'mobile_390x844' },
    { width: 375, height: 812, name: 'mobile_375x812' },
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

  // 7. Mobile Menu Interaction
  await page.setViewportSize({ width: 390, height: 844 });
  const menuButton = await page.$('button[aria-controls="mobile-nav-menu"]');
  if (menuButton) {
    console.log('Testing Mobile Menu interaction...');
    const initialExpanded = await menuButton.getAttribute('aria-expanded');
    await menuButton.click();
    await page.waitForTimeout(200);
    const openedExpanded = await menuButton.getAttribute('aria-expanded');
    const menuVisible = (await page.$('#mobile-nav-menu')) !== null;

    const contactMobile = await page.$('#mobile-nav-menu a[href="#contact"]');
    if (contactMobile) {
      await contactMobile.click();
      await page.waitForTimeout(300);
      const closedAfterClick = (await page.$('#mobile-nav-menu')) === null;
      results.mobileMenu = {
        initialExpanded,
        openedExpanded,
        menuVisible,
        closedAfterClick,
        passed: menuVisible && closedAfterClick && openedExpanded === 'true',
      };
      console.log(`Mobile Menu interaction: ${results.mobileMenu.passed ? 'PASSED' : 'FAILED'}`);
    }
  }

  // 8. Capture Full-Page Screenshots
  // Desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(400);
  const desktopShot = path.join(SCREENSHOT_DIR, 'desktop_1440x900_full.png');
  await page.screenshot({ path: desktopShot, fullPage: true });
  results.screenshots.desktop = desktopShot;

  // Tablet
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(400);
  const tabletShot = path.join(SCREENSHOT_DIR, 'tablet_768x1024_full.png');
  await page.screenshot({ path: tabletShot, fullPage: true });
  results.screenshots.tablet = tabletShot;

  // Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(400);
  const mobileShot = path.join(SCREENSHOT_DIR, 'mobile_390x844_full.png');
  await page.screenshot({ path: mobileShot, fullPage: true });
  results.screenshots.mobile = mobileShot;

  console.log('\n================ VERIFICATION COMPLETE ================');
  console.log(JSON.stringify(results, null, 2));

  await browser.close();
}

runVerification().catch((err) => {
  console.error('Verification failed:', err);
  process.exit(1);
});
