import {Page, expect} from '@playwright/test'

export class DetailedProduct {
    readonly page: Page

    constructor(page: Page) {
        this.page =page
    }

    async detailedProduct (productName:string, productPrice:string) {
        await expect(this.page.locator('.inventory_details_name')).toHaveText(productName)
        await expect(this.page.locator('.inventory_details_price')).toHaveText(productPrice)
        await this.page.getByRole('button', {name: 'Add to cart'}).click()
        await this.page.locator('.shopping_cart_link').click()
    }
}