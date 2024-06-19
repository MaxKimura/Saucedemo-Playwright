import {Page, expect} from '@playwright/test'

export class FinishOrder {
    readonly page: Page

    constructor(page: Page) {
        this.page =page
    }

    async finishOrder () {
        const finishOrder = this.page.locator('.complete-header')
        await expect(finishOrder).toHaveText('Thank you for your order!')
    }
}