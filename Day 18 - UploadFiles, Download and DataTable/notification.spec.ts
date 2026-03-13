import {test, expect} from "@playwright/test"

test("notifications",async({browser})=>{
    let context=await browser.newContext({httpCredentials:
        {username:"admin",
            password:"admin"
        }
    })
    let page=await context.newPage()
    await page.goto("https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/")
    const heading = await page.locator("h1").textContent();
    console.log("Heading Text:", heading);

    await expect(page.locator("h1")).toHaveText("Basic Auth");

    const message = await page.locator("p").textContent();
    console.log("Success Message:", message);

    await expect(page.locator("p")).toHaveText("congratulations with valid credentials");

})