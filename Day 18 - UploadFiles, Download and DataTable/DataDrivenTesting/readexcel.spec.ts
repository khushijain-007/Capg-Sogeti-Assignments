import {test} from "@playwright/test";
import excel from "exceljs"
import path from "path"

test("Reading test data", async({page})=>{
    let book = new excel.Workbook()
// Basic method to print sheet content 
    // await book.xlsx.readFile(path.join(__dirname, "../../testdata/readexcel.xlsx"))
    // let sheet = await book.getWorksheet("Sheet1")
    // let data = await sheet?.getRow(1).getCell(1).value
    // console.log(data);


// Method 1 :- to print data of row tables 
    // await book.xlsx.readFile(path.join(__dirname, "../../testdata/sheet2.xlsx"))
    // let sheet = await book.getWorksheet("Sheet1")!
//     for (let i = 1; i <= sheet.rowCount; i++) {
//     let row = await sheet.getRow(i)

//     for (let j = 1; j <= row.cellCount; j++) {
//         let data = row.getCell(j).value
//         console.log(data)
//     }
// }


// Method 2 :-
// for (let i = 1; i <= sheet?.actualRowCount; i++) {
//     for (let j = 1; j <= sheet?.actualColumnCount; j++) {
//     let data = await sheet?.getRow(i).getCell(j).toString()
//         console.log(data)
//     }
// }


// Task - To show credentials of a website from excel on terminal
await book.xlsx.readFile(path.join(__dirname, "../../testdata/sheet3.xlsx"))
    let sheet = await book.getWorksheet("Sheet1")!

// Method 1 :- Working but not showing output 
    let data: any[] = []
        for (let i = 2; i <= sheet.actualRowCount; i++) {
    let row = sheet.getRow(i)
    data.push(row.getCell(1).value)
    data.push(row.getCell(2).value)
    data.push(row.getCell(3).toString())
    data.push(row.getCell(4).value)
}
console.log(data)
 await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

    await page.getByPlaceholder("Enter your name").fill(String(data[1]))
    await page.getByPlaceholder("Enter Your Email").fill(String(data[2]))
    await page.getByPlaceholder("Enter your password").fill(String(data[3]))

// Method 2 :- 
// let excelData: any[] = []
// for (let i = 2; i <= sheet.rowCount; i++) {
//     let row = sheet.getRow(i)
//     let rowData: any[] = []
//     for (let j = 1; j <= row.cellCount; j++) {
//         let data = row.getCell(j).value
//         rowData.push(data)
//     }
//     excelData.push(rowData)
// }
// console.log(excelData)


})