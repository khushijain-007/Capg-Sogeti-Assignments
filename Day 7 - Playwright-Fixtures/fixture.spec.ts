import {test} from "@playwright/test" //in curly braces it s object
test("title", async({browser,browserName})=>{
    let context = await browser.newContext()
    let page = await context.newPage()

    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("shoes")
    console.log(browserName);
    await page.pause()
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("clothes")

    console.log(browserName);


    // await page.waitForTimeout(5000)

    // let page2 = await context.newPage()    
    // await page2.goto("https://www.flipkart.in/")

})