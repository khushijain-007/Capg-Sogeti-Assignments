import { Page } from "@playwright/test";

export class AmazonPage {

  page: Page;

  searchBox = "#twotabsearchtextbox";
  ramFilter = "//span[contains(text(),'10')]";
  products = "//div[@data-component-type='s-search-result']";
  quantityDropdown = "#quantity";
  addToCartBtn = "#add-to-cart-button";

  constructor(page: Page) {
    this.page = page;
  }

  async openAmazon(url: string) {
    await this.page.goto(url);
  }

  async searchProduct(product: string) {
    await this.page.fill(this.searchBox, product);
    await this.page.press(this.searchBox, "Enter");
  }

  async selectRam() {
    await this.page.locator(this.ramFilter).click();
  }

  async clickProduct(index: number) {

    const product = this.page.locator(this.products).nth(index - 1);

    const [newPage] = await Promise.all([
      this.page.context().waitForEvent("page"),
      product.click()
    ]);

    await newPage.waitForLoadState();

    this.page = newPage;
  }

  async selectQuantity(quantity: string) {
    await this.page.selectOption(this.quantityDropdown, quantity);
  }

  async addToCart() {
    await this.page.click(this.addToCartBtn);
  }

}