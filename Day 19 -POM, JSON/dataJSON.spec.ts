import {test} from "@playwright/test";
import path from "path"
import fs from "fs"

// path.join(__dirname, ""../../testdata/data.json")
let datafile = fs.readFileSync(path.join(__dirname, "../../testdata/data.json"))
let data = JSON.parse(datafile)


// test("JSON data", async({page})=>{
    // console.log(data.greet);
    // [{"greet":"Hello"},{"greet":"Hiii"},{"greet":"Hey"}] -- in JSON file
    // data.forEach(d=>{
    //     console.log(d.greet);
    // });

test("for application", async({page})=>{

        // await page.goto(data.url)
        // await page.getByLabel("Username").fill(data.username)

        for(let d of data){
            let url=d.url
            let username=d.username
            let password=d.password

            await page.goto(url)
            // console.log(page.title())
        }
        

    })
    

// })