import {test} from "@playwright/test"

// test("XPath2", async({page})=>{
//     await page.goto("https://www.amazon.com/")
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill("Shoes")
//     await page.locator('//input[@id="nav-search-submit-button"]').click()
//     await page.locator('//span[contains(text(),"Nike Womens Court Vision Low Next Nature Basketball Shoes")]').click()
// })

// Parent-Child span
// practice cmd-   //div[@id="form"]/child-div/child-input[@id="username"]

// Stepwise - descendant-preceding
// cmd- //div[@id="form"]/descendant::input[@id="username"]/preceding-sibling::label/following-sibling::input

// Ancestor- opposite of descendant
// to locate price of a product in site
// cmd1- //div[@data-id="MOBHJHSHMQDGQSAD"]//div[@class="RG5Slk"]/ancestor::div[@class="ZFwe0M row"]//div[@class="hZ3P6w DeU9vF"]
// cmd2- //div[@class="RG5Slk"]/ancestor::div[@class="ZFwe0M row"]/child::div/following-sibling::div/descendant::div[@class="hZ3P6w DeU9vF" and text()="₹27,999"]

// To locate cart icon on flipkart
// cmd- //div/descendant::span[text()='Cart']/parent::a

// Some tags that can't be locate because of version control
// svg, math, so
// so we will use- //*[local-name()="svg"]


// Task
test("XPath2", async({page})=>{
    await page.goto("https://www.amazon.com/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("phones")
    await page.locator('//input[@id="nav-search-submit-button"]').click()
    await page.locator('//span[@class="a-size-base a-color-base"]//ancestor::li[@id="p_n_g-1003517064111/206818075031"]//div[@class="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"]//i[@class="a-icon a-icon-checkbox"]').click()
})
