import {test} from "@playwright/test";
test("Keyboard Actions", async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.getByPlaceholder("Enter your name").press("Enter")
    await page.getByPlaceholder("Enter your name",{exact:true}).fill("Khushi")
    await page.getByPlaceholder("Enter Your Email").press("Enter")
    await page.getByPlaceholder("Enter Your Email",{exact:true}).fill("abc@gmail.com")
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    await page.getByPlaceholder("Enter your password").press("Enter")
    await page.getByPlaceholder("Enter your password").press("Control+V")
    
    await page.locator('//button[@type="submit"]').hover()
    await page.mouse.down();
    await page.mouse.up();


//     const registerButton = page.getByRole("button", { name: "Register" });
//     const box = await registerButton.boundingBox();
//     await page.mouse.move(box.x + box.width/2, box.y + box.height/2);

    // await page.locator("#btn").hover()
    // await page.mouse.down()
    // await page.mouse.up()

})