// import { test, expect } from '@playwright/test';

// test.describe('To Do List Tests', () => {

//   test('Add a new todo item', async ({ page }) => {
//     await page.goto('https://demo.playwright.dev/todomvc');

//     const todoInput = page.locator('.new-todo');
//     await todoInput.fill('Learn TypeScript');
//     await todoInput.press('Enter');

//     const todoItem = page.locator('.todo-list li');
//     await expect(todoItem).toHaveText('Learn TypeScript');
//   });

//   test('Mark todo as completed', async ({ page }) => {
//     await page.goto('https://demo.playwright.dev/todomvc');

//     await page.locator('.new-todo').fill('Complete assignment');
//     await page.locator('.new-todo').press('Enter');

//     await page.locator('.toggle').click();

//     await expect(page.locator('.todo-list li')).toHaveClass(/completed/);
//   });

//   test('Delete todo item', async ({ page }) => {
//     await page.goto('https://demo.playwright.dev/todomvc');

//     await page.locator('.new-todo').fill('Delete me');
//     await page.locator('.new-todo').press('Enter');

//     // Hover to show delete button
//     await page.locator('.todo-list li').hover();
//     await page.locator('.destroy').click();

//     // Assertion
//     await expect(page.locator('.todo-list li')).toHaveCount(0);
//   });

// });

import { test, expect } from "@playwright/test";

test("To Do List - Add, Complete and Delete", async ({ browser, browserName }) => {

    console.log("Running on browser:", browserName);

    let context = await browser.newContext();

    let page = await context.newPage();

    await page.goto("https://demo.playwright.dev/todomvc/");

    await page.locator(".new-todo").fill("Learn TypeScript");
    await page.locator(".new-todo").press("Enter");

    // Assertion - item added
    await expect(page.locator(".todo-list li"))
        .toHaveText("Learn TypeScript");

    await page.locator(".toggle").click();

    await expect(page.locator(".todo-list li"))
        .toHaveClass(/completed/);

    await page.locator(".todo-list li").hover();
    await page.locator(".destroy").click();

    await expect(page.locator(".todo-list li"))
        .toHaveCount(0);

});