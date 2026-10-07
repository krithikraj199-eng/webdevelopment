import { chromium } from 'playwright';

async function diagnose() {
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

  const page = await browser.newPage({ viewport: { width: 768, height: 1024 } });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

  const overflowing = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('*'))
      .filter(el => el.getBoundingClientRect().right > window.innerWidth + 1)
      .map(el => ({
        tag: el.tagName,
        id: el.id,
        className: el.className,
        right: el.getBoundingClientRect().right,
        width: el.getBoundingClientRect().width,
        text: el.innerText ? el.innerText.slice(0, 30) : ''
      }));
  });

  console.log('OVERFLOW_ELEMENTS:', JSON.stringify(overflowing, null, 2));
  await browser.close();
}

diagnose();
