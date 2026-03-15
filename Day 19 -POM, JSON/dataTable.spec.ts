import {test} from "@playwright/test";
import path from "path";
import excel from "exceljs";

test("Write excel data", async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, "../../testdata/readexcel.xlsx"))
    let sheet = await book.getWorksheet("Sheet4")

    if(!sheet){
        sheet = await book.addWorksheet("Sheet4")
    }

    // sheet.getRow(1).getCell(1).value="playwright";
    // await book.xlsx.writeFile(path.join(__dirname, "../../testdata/readexcel.xlsx"))

    await page.goto("https://www.amazon.com")
    await page.locator("#twotabsearchtextbox").fill("shoes")

    await page.waitForSelector(".s-suggestion")
    const suggestions = await page.locator(".s-suggestion").allTextContents()
    console.log(suggestions)

    // Method 1 :- to print the data in excel
    // for (let i = 0; i < suggestions.length; i++) {
    //     sheet.getRow(i + 1).getCell(1).value = suggestions[i]
    // }

    // suggestions.forEach((text, index) => {
    //     sheet!.getCell(`A${index + 1}`).value = text
    // })

    // await book.xlsx.writeFile(path.join(__dirname, "../../testdata/readexcel.xlsx"))
    

    // Method 2 :- to print the data in excel
    sheet.spliceRows(1, sheet.rowCount)
    suggestions.forEach((text)=>{
        sheet.addRow([text])
    })
    await book.xlsx.writeFile(path.join(__dirname, "../../testdata/readexcel.xlsx"))
})