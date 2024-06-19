import { expect, Page } from '@playwright/test'

export class ProductPage {

    readonly page: Page

    constructor(page: Page) {
        this.page =page
    }

    async selectProductByFilter (filter:string, productName:string, productPrice:string) {
        await this.page.locator('.product_sort_container').selectOption(filter)
        const product = this.page.locator('.inventory_item_name').nth(0)
        await expect(product).toHaveText(productName) 

        const priceProduct = await this.page.locator('.inventory_item_price').nth(0)
        await expect(priceProduct).toHaveText(productPrice) 
        await product.click()
    }

}