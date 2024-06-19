import { expect, Page } from '@playwright/test'

export class UserRegistration {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async userRegistration(firstName:string, lastName:string, zipCode:string) {
        await this.page.getByPlaceholder('First Name').fill(firstName)
        await this.page.getByPlaceholder('Last Name').fill(lastName)
        await this.page.getByPlaceholder('Zip/Postal Code').fill(zipCode)

        await this.page.getByText('Continue').click()
    }

    async userRegistrationValidation(message:string) {
        const validation = await this.page.locator('h3')
        expect(validation).toHaveText(message) 
    }
}