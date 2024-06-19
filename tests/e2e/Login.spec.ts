import { test, expect } from '@playwright/test'
import { Login } from '../support/page/login'

let login: Login

test.beforeEach(({ page }) => {
  login = new Login(page)
})

test('realizar login com sucesso', async ({ page }) => {
  
  await login.visitHomePage()
  await login.submitLoginData('standard_user', 'secret_sauce')
  await expect(page.locator('.title')).toHaveText('Products')
})

test ('não realizar login com usuario incorreto', async ({ page }) => {
  
  await login.visitHomePage()
  await login.submitLoginData('incorrect', 'secret_sauce')
  
  const message = 'Epic sadface: Username and password do not match any user in this service'
  await login.validationMessage(message)
})

test ('não realizar login com senha incorreto', async ({ page }) => {

  await login.visitHomePage()
  await login.submitLoginData('standard_user', 'incorrect_password')
  
  const message = 'Epic sadface: Username and password do not match any user in this service'
  await login.validationMessage(message)
})


test ('não realizar login quando usuario em branco', async ({ page }) => {
  
  await login.visitHomePage()
  await login.submitLoginData('', 'secret_sauce')
  
  const message = 'Epic sadface: Username is required'
  await login.validationMessage(message)
})

test ('não realizar login quando senha em branco', async ({ page }) => {
  
  await login.visitHomePage()
  await login.submitLoginData('standard_user', '')
  
  const message = 'Epic sadface: Password is required'
  await login.validationMessage(message)
})
