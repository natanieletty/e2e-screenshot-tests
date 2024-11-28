const { test, expect } = require('@playwright/test');

// Перевірка форми входу
test('Перевірка форми входу', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.fill('#username', 'test_user');
    await page.fill('#password', 'password123');
    await page.click('#loginButton');
    await expect(page.locator('#successMessage')).toBeVisible();
});

// Перевірка заголовка сторінки
test('Перевірка заголовка сторінки', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/Локальна сторінка/);
});

// Перевірка обов’язковості заповнення полів
test('Валідація обов’язкових полів форми', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('#loginButton');
    const error = await page.evaluate(() => document.querySelector(':invalid'));
    expect(error).not.toBeNull();
});
