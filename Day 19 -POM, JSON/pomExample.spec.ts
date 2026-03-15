import {test} from "@playwright/test";
import example from "../PageObjectModel/example.page.ts"


test("POM", async({page})=>{

    const examplepage = new example(page)
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await examplepage.usernameTF.fill("Khushi")
})