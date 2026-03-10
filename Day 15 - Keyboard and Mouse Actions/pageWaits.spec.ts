// While navigating between tabs the controller will be on the previous page until said to go onto next page
// For this we use waitForNavigation() - 

import { test, expect } from "@playwright/test";

test("Page wait", async ({ page }) => {

    await page.goto("https://www.flipkart.com/");
    await page.locator('(//input[@class="nw1UBF v1zwn25"])[1]').fill("shoes");
    await page.keyboard.press("Enter")
    await page.locator('(//img[@class="MZeksS"])[2]').click()

    let [page2] = await Promise.all([page.waitForNavigation(),
    page.locator('//div[@class="v1zwn21k v1zwn20 _1psv1zeb9 _1psv1ze0"]').first().click()])

    // let price = await page.locator('//div[@class="v1zwn21k v1zwn20 _1psv1zeb9 _1psv1ze0"]').textContent();
    // console.log("Price of shoe:", price);

    console.log(await page.url())
    console.log(await page2.url())

});