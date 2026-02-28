import {test} from "@playwright/test"

// test("browser controls", async({page})=>{
    // let size=await page.viewportSize()
    // console.log(size);
    // await page.setViewportSize({width:500, height:500})

    // console.log(await page.viewportSize());
    // await page.pause()

    // await page.goto("https://www.amazon.com/")
    // console.log(await page.title());
    // })



test("browser controls", async({browser})=>{
    let context=await browser.newContext()
    let page = await context.newPage()

    await page.goto("https://www.amazon.com/")
    let time=new Date().getTime()
    await page.screenshot({path:"screenhot/$(time).jpg"})
    console.log(await context.cookies());

    // console.log(await page.url());
    // await browser.close()
})