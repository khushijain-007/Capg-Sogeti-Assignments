import {test} from "@playwright/test";

// Notes:-
// get methods:-
// getByLabel -- take label elements from site
// getAttribute -- Retrieves the value of a specific attribute from an element
// getByAltText -- Locates elements (mainly images) using their alt attribute text
// getByPlaceholder -- Locates input fields using the placeholder text inside the input box
// getByRole -- it only takes name tag
// getByTestId -- Locates elements using a data-testid tag
// getByText -- Locates elements containing the visible text on the page
// getByTitle -- Locates elements using the title attribute text

test("get by methods", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await page.getByLabel("Username").fill("student")
    // await page.getByLabel("Username",{exact:true}).fill("student")   // label text exactly instead of partially
    // await page.getByLabel("Password").fill("Password123")
    // await page.getByText("Submit").first().click()

    await page.getByRole("textbox" ,{name:"username", exact:true})
    await page.getByRole("textbox" ,{name:"password", exact:true})
    await page.getByRole("button" ,{name:"Submit", exact:true}).click()

    await page.getByPlaceholder("Enter your name")
})