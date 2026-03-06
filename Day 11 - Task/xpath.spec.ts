import {test} from "@playwright/test"

test("XPath", async({page})=>{
    await page.goto("https://www.amazon.com/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("Samsung phones")
    await page.locator('//input[@id="nav-search-submit-button"]').click()
    let price=page.locator('(//span[@class="a-price-whole"])[1]').first()
    console.log(price);
    
})