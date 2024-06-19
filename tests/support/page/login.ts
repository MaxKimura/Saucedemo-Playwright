import { expect, Page } from '@playwright/test'

export class Login {

    readonly page: Page    
    
    constructor(page: Page) {
        this.page = page
    }

    async logIn(username:string, password:string) {
        await this.visitHomePage()
        await this.submitLoginData(username, password)
        await expect(this.page.locator('.title')).toHaveText('Products')
    }

    async visitHomePage() {
        await this.page.goto('https://www.saucedemo.com/')
        await expect(this.page.locator('.login_logo')).toHaveText('Swag Labs')
    }

    async submitLoginData(username:string, password:string) {
        await this.page.locator('#user-name').fill(username) 
        await this.page.locator('#password').fill(password) 
        await this.page.locator('#login-button').click()
    }

    async validationMessage(message:string) {
        await expect(this.page.locator('h3')).toHaveText(message)
    }
}