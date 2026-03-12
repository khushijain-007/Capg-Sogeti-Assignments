import {test, expect} from "@playwright/test";
import {log} from "console"

// frames:- the complete main page of the site
// iframes:- the part/frame window inside a main page 

test("iFrames", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    await page.locator('//frame[@src="frame_1.html"]').hover()
    let frame = await page.frames()
    console.log(frame.length);
    console.log(frame);

    for(let i of frame){
        console.log(await i.title());
    }
    await page.title()

// To locate frames from the site:-
// method 1:
    let frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    await frame1?.locator('//input[@name="mytext1"]').fill("alpha")
// method 2:
    let frame2=await page.frameLocator('//frame[@src="frame_2.html"]')
    await frame2?.locator('//input[@name="mytext2"]').fill("beta")
// method 3:
    await page.locator('//frame[@src="frame_2.html"]').contentFrame()

    let frame3=await page.frame({url:"https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"})
    let frame5=await frame3?.locator('//div[@class="Qr7Oae"]').contentFrame()
    await frame5?.getByRole('radio', { name: 'Hi, I am the UI.Vision IDE' }).click()

})