import {Page, expect} from '@playwright/test'

export class Checkout {
    readonly page: Page

    constructor(page: Page) {
        this.page =page
    }

    async checkout (productName:string, productPrice:string) {
        await expect(this.page.locator('.inventory_item_name')).toHaveText(productName)
        await expect(this.page.locator('.inventory_item_price')).toHaveText(productPrice)
        await this.page.getByRole('button', {name: 'checkout'}).click()
    }
}