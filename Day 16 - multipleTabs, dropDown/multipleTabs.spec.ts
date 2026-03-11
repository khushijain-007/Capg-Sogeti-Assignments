import {test} from "@playwright/test"

// test("Multiple tabs", async({browser})=>{
//     let context = await browser.newContext()
//     let page = await context.newPage()
//     await page.goto("https://www.amazon.in/")

//     // let page2 = await context.newPage()
//     await page.goto("https://www.flipkart.com/")

// })

// test.only("", async({browser})=>{
//     let context = await browser.newContext();
//     let page = await context.newPage();
//     await page.goto("https://www.flipkart.com/")
//     await page.getByPlaceholder("Search for Products, Brands and More").first().fill("shoes")
//     await page.keyboard.press("Enter")
//     // await page.locator('//button[@class="XFwMiH"]').first().click();
//     const [page2] = await Promise.all([
//     page.waitForEvent("popup"),     // here page instead of popup won't work
//     page.locator("//img[@class='MZeksS']").first().click()
//     ])

test.only("", async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0")
    // await page.locator('//img[@class="w-full h-48 object-cover"]').first().hover()
    // await page.locator('//button[@class="mt-4 px-4 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-500"]').first().click()
    const [page2] = await Promise.all([
        page.waitForEvent("popup"),
        page.locator('//img[@class="w-full h-48 object-cover"]').first().hover(),
        page.locator('//button[@class="mt-4 px-4 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-500"]').first().click()
        // page.locator('//h1[@class="text-3xl font-bold mb-2"]').click()
    ])

    await page2.waitForLoadState();
    const item = await page.locator('//h1[@class="text-3xl font-bold mb-2"]').textContent()
    await page.waitForTimeout(2000)
    console.log("Item name:", item)
    // console.log("Page1",page.url());
    // console.log("Page2",page2.url())

})