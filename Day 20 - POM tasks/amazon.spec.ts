import { test } from "@playwright/test";
import { AmazonPage } from "../PageObjectModel/amazon.page";
import fs from "fs";

const data = JSON.parse(
  fs.readFileSync("./testdata/amazonData.json", "utf-8")
);

test("Amazon Mobile Purchase Test", async ({ page }) => {

  const amazon = new AmazonPage(page);

  await amazon.openAmazon(data.url);

  await amazon.searchProduct(data.product);

  await amazon.selectRam();

  await amazon.clickProduct(data.productNumber);

  await amazon.selectQuantity(data.quantity);

  await amazon.addToCart();

});