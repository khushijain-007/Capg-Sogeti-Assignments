import {test} from "@playwright/test";

test("Pro Kabaddi League", async({page})=>{
    await page.goto("https://www.prokabaddi.com/");
    await page.locator('//a[@data-parameter="homepage_recent_more_link"]').click()
    const game = await page.locator('//p[text()="Final"] | //p[text()="Dabang Delhi K.C."] | //p[text()="Puneri Paltan"] | //p[text()="31"] | //p[text()="28"] | //p[text()="Thyagaraj Indoor Stadium, Delhi"] | // h2[text()="October 31, 2025, Friday"]')
    .first().textContent();
    console.log(game);
})