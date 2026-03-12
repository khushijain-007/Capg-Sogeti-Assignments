import { test } from '@playwright/test';

test("",async({page})=>{

    page.on("dialog", async(d)=>{
        if(d.type()=="alert"){
            await d.accept("")
        }
        else if(d.type()=="confirm"){
            await d.dismiss()
            await d.message()
        }
        else if(d.type()=="prompt"){
            // await d.accept("hello")
            // await d.defaultValue()
            if(d.defaultValue()=="tom"){
                console.log((await d.defaultValue()));
                await d.accept()
            }
            else{
                await d.accept("tom")
            }
        }

        // confirm
        // prompt
    })
})

test('Click popup button', async ({ page }) => {
  page.on("dialog",async(d)=>{
    console.log(d.message())
    await d.accept()
  })

  await page.goto("https://testautomationpractice.blogspot.com/")

//   await page.getByRole('button', { name: 'Simple Alert' }).click()
//   await page.waitForTimeout(3000)
//   await page.getByRole('button',{name:"OK"}).click()

  page.once('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept(); // clicks OK
});
await page.getByRole('button', { name: 'Simple Alert' }).click();


//   //page.on("dialog,()=>{}")
//   //page.once("dialog", async dialog=>{
//   //  console.log(dialog.message())
//   //  await dialog.accept()
//   //})

});