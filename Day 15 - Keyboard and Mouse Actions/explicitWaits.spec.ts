    // States of elements :- (Explicit waits)
    // hidden, visible, attached, detached
    // Default state of Playwright actions:- visible
    // Default state of waitfor() there is an operation:- visible
    // Default state of waitForSelector() method:- attached


    import { test, expect } from "@playwright/test";

test("Explicit wait", async ({ page }) => {
    // await page.goto("https://www.amazon.in/");

    // await expect(page.locator('a:has-text("MX Player")'))
    //     .toHaveText("MX Player");

    // await page.locator('a:has-text("MX Player")').click();

    // Using Assertion
    // await page.getByTestId("nav_avod_desktop_topnav").waitFor({timeout : 5000, state : "visible"}); //-- passed
    // await page.getByTestId("nav_avod_desktop_topnav").waitFor({timeout : 5000, state : "hidden"}); //-- passed
    // await page.getByTestId("nav_avod_desktop_topnav").waitFor({timeout : 5000, state : "attached"}); //-- passed
    // await page.getByTestId("nav_avod_desktop_topnav").waitFor({timeout : 5000, state : "detached"}); //-- passed

    // Using Xpath
    // await page.locator('//a[@data-csa-c-slot-id="nav_cs_1"]').waitFor({timeout : 5000, state : "visible"});
    // (await page.waitForSelector('xpath=//a[@data-csa-c-slot-id="nav_cs_1"]', {timeout : 3000}))
    // await page.locator('xpath=//a[@data-csa-c-slot-id="nav_cs_1"]').click()


    await page.goto("https://www.amazon.com/");
    await page.getByTestId("nav_cs_gc").waitFor({timeout : 5000, state : "visible"});


});