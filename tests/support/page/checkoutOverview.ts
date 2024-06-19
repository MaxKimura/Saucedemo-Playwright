import {Page, expect} from '@playwright/test'

export class CheckoutOverview {
    readonly page: Page

    constructor(page: Page) {
        this.page =page
    }

    async checkoutOverview (productName:string, productPrice:string, tax:string, total:string) {
        const overView = this.page.locator('.title')
        await expect(overView).toHaveText('Checkout: Overview')

        await expect(this.page.locator('.inventory_item_name')).toHaveText(productName)
        await expect(this.page.locator('.inventory_item_price')).toHaveText(productPrice)
        await expect(this.page.locator('.summary_tax_label')).toHaveText(tax)
        await expect(this.page.locator('.summary_total_label')).toHaveText(total)

        await this.page.getByRole('button', {name:'Finish'}).click()
    }
}