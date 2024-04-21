import {test, expect} from '@playwright/test'

test('my first test', async ({page}) => {
    console.log('Hello world!!!');
    await page.goto('https://google.com');
    await expect(page).toHaveTitle('Google');
});