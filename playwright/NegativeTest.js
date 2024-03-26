const { chromium } = require('playwright');
const { email, password } = require('./user');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true
  });

  const page = await browser.newPage();
  await page.goto('https://netology.ru/?modal=sign_in');
  await page.fill('input[name="email"]', 'testtest@gmail.com');
  await page.fill('input[name="password"]', '123456789');
  await page.click('button[type="submit"]');
  await page.pause();

  //assertion
  await browser.close();
})();
