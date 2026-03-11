import {test, expect} from "@playwright/test";
//  test("Standard drop down selection", async({page})=>{

//     await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
//     await page.locator('#country_code').selectOption({value:"+91"});    // we acn use label also instead of value
//     await page.locator('#select3').selectOption({value:"India"});
//     // await expect(page.locator('#select3')).toHaveValue("United Kingdom");
//     // await page.waitForTimeout(7000)
//     // to check if the selected values are correct, we can use toCheck() or assertions

//  })

  test("Multi select", async({page})=>{

    // Demo task
    // await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
    // await page.locator('#select-multiple-native').selectOption([
    //     { value: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" },
    //     { index: 1 }]);

    // Myntra Drop down task
    // await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")
    // await page.locator('//div[@class="sort-sortBy"]').click({force:true})
    // await page.waitForTimeout(3000)
    // let options = await page.locator('//ul[@class="sort-list"]').all()

    // for(let opt of options){
    //     let text = await opt.textContent()
    //     console.log(text);
    // }

    //  Even if we give partial test case it will search the similar one and locate it
    // for(let opt of options){
    //     let text = await opt.textContent()
    //     console.log(text);
    //     if(text.includes("Better")){
    //         await opt.click()
    //         break;
    //     }
    // }


    // Task - Amazon
    await page.goto("https://www.amazon.in/")
    await page.locator('#twotabsearchtextbox').first().fill("shoes")
    // let options = await page.locator('//div[@class="autocomplete-results-container"]').all()
    // await page.waitForTimeout(3000)
    let options = await page.locator('//div[@class="left-pane-results-container"]').all()
    await page.waitForTimeout(3000)

    // for(let opt of options){
    //     let text = await opt.textContent()
    //     console.log(text);
    //     if(text.includes("rack")){
    //         await opt.click()
    //         break;
    //     }
    // }

})

