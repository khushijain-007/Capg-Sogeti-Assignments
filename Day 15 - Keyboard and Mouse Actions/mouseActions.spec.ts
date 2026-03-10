import {test} from "@playwright/test";
test("Mouse Actions", async({page})=>{

    // await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0");
    // await page.locator("#btn").click({button:"right",
    //     clickCount:2, force:true})
    // await page.locator("#btn").dblclick()

    // await page.locator("#btn").hover()
    // await page.mouse.down()
    // await page.mouse.up()

    // await page.locator("//input[@id='submit']").click({force:true})
    // await page.locator("//input[@id='submit']").dispatchEvent("click")   -- if we don't want to use the force method


    // await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
    // await page.locator('//div[@class="zoom-button "]').hover()
    // await page.mouse.down()
    // await page.waitForTimeout(5000)
    // await page.mouse.up()


    // await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    // await page.locator('//div[text()="Mobile Charger"]').hover()
    // await page.mouse.down()
    // await page.locator('(//div[@class="drop-column min-h-[200px] bg-slate-100"])[1]').hover()
    // await page.mouse.up()


    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
    await page.locator('//input[@type="checkbox"]').click()
    await page.waitForTimeout(3000)
    await page.locator('//input[@type="checkbox"]').uncheck()
    await page.waitForTimeout(2000)

    // await page.mouse.move(100,100)


})