import {test} from "@playwright/test";

test("web elements controls", async({page})=>{

    // await page.goto("https://www.saucedemo.com/");
    // await page.getByTestId('//input[@data-test="username"]')


    // await page.goto("https://practicetestautomation.com/practice-test-login/")

    // Type - it will enter characters one by one not like fill that enters in one time only
    // also in type when we give one value it will enter it but after updating value it will add it just besides the previous value 
    // But it is not like the fill as it will update value
    // await page.getByRole("textbox" ,{name:"username", exact:true}).type("student")
    // await page.getByRole("textbox" ,{name:"username", exact:true}).type("students")
    // await page.getByRole("textbox" ,{name:"password", exact:true}).fill("Password123")
    // await page.getByRole("textbox" ,{name:"password", exact:true}).fill("Password1234")
    // await page.getByRole("button" ,{name:"Submit", exact:true}).click()


    // Working
    await page.getByLabel("Username",{exact:true}).type("student")
    await page.getByLabel("Username",{exact:true}).type("student1")
    await page.getByLabel("Password").fill("Password123")
    await page.getByLabel("Password").isVisible()





})