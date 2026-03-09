import { test, expect } from "@playwright/test";

test("Google assertions", async ({ page }) => {

    await page.goto("https://www.google.com/")
    // await expect(page.locator("#twotabsearchtextbox")).toBeAttached()
    // await expect(page.locator("#twotabsearchtextbox")).toBeVisible()
    // await expect(page.locator("#nav-search-submit-button")).toBeEnabled()
    // await expect(page.locator("#nav-logo-sprites")).toBeVisible()
    // await expect(page.locator("#nav-logo-sprites")).toHaveScreenshot("amazon-logo.png")
    await expect(page).toHaveScreenshot()
    // await expect(page.locator("#nav-link-accountList")).toContainText("Account")
    


})