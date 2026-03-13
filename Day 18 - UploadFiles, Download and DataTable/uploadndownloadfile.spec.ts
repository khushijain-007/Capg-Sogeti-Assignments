import { test } from '@playwright/test';
import path from "path"

// test("Upload files", async({page})=>{
    // console.log(__dirname);    // -- gives current directory path
    // console.log(__filename);   // -- gives the directory + filename path

    // await page.goto("https://testautomationpractice.blogspot.com/")
    // For single file only:-

    // await page.locator("#singleFileInput").setInputFiles("C:/Users/hp/Desktop/playwright/tests/uploadfiles/demo.txt")
    // await page.getByRole("button",{name:"Upload Single File"}).click()
    // await page.waitForTimeout(3000)


    // For single file from local system:-

    // await page.locator("#singleFileInput").setInputFiles("C:/Users/hp/Downloads/practice/a.txt")
    // await page.getByRole("button",{name:"Upload Single File"}).click()
    // await page.waitForTimeout(3000)


    // For multiple files:-

    //     await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/hp/Desktop/playwright/tests/uploadfiles/dime.py",
    //         "C:/Users/hp/Desktop/playwright/tests/uploadfiles/krane.js",
    //     "C:/Users/hp/Desktop/playwright/tests/uploadfiles/like.xlsx"
    // ])
    //     await page.getByRole("button",{name:"Upload Multiple Files"}).click()
    //     await page.waitForTimeout(3000)


    // Using relative path method - for single file
    // await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"uploadfiles/demo.txt"))    
    // await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../demo.txt"))   // -- not working  
    // we should not give the current directory folder as the file is in uploadfiles folder so it would not consider tests as in directory as we are already present there
    // await page.getByRole("button",{name:"Upload Single File"}).click()
    // await page.waitForTimeout(3000)


// test.only("downloads",async({browser})=>{
//     let context = await browser.newContext();
//     let page = await context.newPage();
//         await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
//         await page.getByPlaceholder("Enter text here").fill("My name is Khushi")
//         await page.getByPlaceholder("Filename").fill("profile.txt")
//     const [downloadFile]=await Promise.all([
//         page.waitForEvent("download"),
//         page.locator("#downloadButton").click()
//     ])
//     console.log("Downloaded file:",downloadFile.suggestedFilename());

//     let fileName=downloadFile.suggestedFilename();
//     let downloadFolder = "C:/Users/hp/Desktop/playwright/downloads"
//         await downloadFile.saveAs(path.join(downloadFolder, fileName);


test.only("downloads", async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");

    await page.getByPlaceholder("Enter text here").fill("My name is Khushi");
    await page.getByPlaceholder("Filename").fill("profile.txt");

    const [downloadFile] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click()
    ]);

    console.log("Downloaded file:", downloadFile.suggestedFilename());

    let fileName = downloadFile.suggestedFilename();
    let downloadFolder = "C:/Users/hp/Desktop/playwright/downloads/";
    await downloadFile.saveAs(downloadFolder + fileName);


})