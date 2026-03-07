import {test} from "@playwright/test";

// Task-1
test("name-to-price", async({page})=>{
    await page.goto("https://www.amazon.com/");
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    await page.locator('//input[@id="nav-search-submit-button"]').click()
    await page.locator('//span[text()="Nike Womens Court Vision Low Next Nature Basketball Shoes"] | //span[@class="a-price-whole" and .="4995"]');

//     // console.log("item:", await item.textContent());
//     // extra cmd- (//span[text()="Nike Womens Court Vision Low Next Nature Basketball Shoes"]//ancestor::div//div[@data-cy="price-recipe"])[1] 

})

