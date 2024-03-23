const {
    chromium
  } = require(`playwright`);
  const {
    test,
    expect
  } = require(`@playwright/test`);
  
  (async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto(`https://netology.ru/?modal=sign_in`);
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill(`bhyjejd@mail.ru`);
    await page.getByPlaceholder('Пароль').click();
    await page.getByPlaceholder('Пароль').fill('123456789');
    await page.getByTestId('login-submit-btn').click();
    await expect(page.getByText(`Вы ввели неправильно логин или пароль`)).toBeVisible();
  
    await browser.close();
  })();