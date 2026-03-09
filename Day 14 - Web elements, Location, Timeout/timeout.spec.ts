import { test } from "@playwright/test";

// test("array with timeout", async ({ page }) => {

//     test.setTimeout(10000);   // test timeout (10 seconds)

//     await page.goto("https://www.amazon.com/", { timeout: 5000 });

//     const products = ["laptop", "mobile", "keyboard"];

//     for (let item of products) {
//         await page.locator("#twotabsearchtextbox").fill(item, { timeout: 3000 });
//         console.log(item);
//     }

// });


test("simple timeout", async ({ page }) => {

    test.setTimeout(10000);   // test timeout (10 seconds)
    await page.goto("https://www.amazon.com/", { timeout: 5000 });
    let item = await page.locator("#twotabsearchtextbox").fill("shoes");
    await page.locator("#twotabsearchtextbox").fill("laptop", { timeout: 3000 });
    await page.locator("#nav-search-submit-button").click({ timeout: 3000 });

    // preferences:-
    // 1. action timeout -- Maximum time allowed for a single action like click(), fill(), type(), etc
    // 2. timeout -- Maximum time allowed for navigation or locator waiting
    // 3. test timeout -- Maximum time allowed for the entire test case to finish

    // Waits
    // 1. Auto-wait - It waits for elements to be ready before performing actions like click() or fill(), hence we don’t have to manually add waits in most cases
    // 2. Hard coded wait - waitForTimeout() - it will wait until the time finishes like if a task is done in 2-3 sec and in timeout we have given 10sec so it will wait till 10sec
    // 3. Explicit wait - A wait where we tell the script to wait until a specific condition happens. Ex- waitFor()
})