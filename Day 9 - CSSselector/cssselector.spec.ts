import {test} from "@playwright/test"

// Website - Automation practice
// test("css selector", async({page})=>{
//     await page.goto('https://practicetestautomation.com/practice-test-login/')

//     await page.locator("input#username").fill("student")
//     await page.locator("input#password").fill("Password123")
//     await page.locator("button#submit").click()
//     await page.locator('.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color').click()
//     // await page.locator()
// })

// Website - Tech beamers
// test("css selector", async({page})=>{
//     await page.goto('https://techbeamers.com/practice-test-login/')

//     await page.locator("input#username").fill("testuser")
//     await page.locator("input#password").fill("password123")
//     await page.locator("button[type=submit]").click()
//     // await page.locator('.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color').click()
//     // await page.locator()
// })


// Website - GUI Automation
test("css selector", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("input#name").fill("testuser")
    await page.locator("input#email").fill("password123")
    await page.locator("input#phone").fill("87367635123")
    // await page.locator("input#address").fill("hkghddjhlkkhjm")
    await page.locator(".form-check-input#male").click()
    // await page.locator("#comboBox[type="text"]").click()

})