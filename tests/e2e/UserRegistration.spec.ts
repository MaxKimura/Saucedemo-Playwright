import { test } from '@playwright/test'
import { Login } from '../support/page/login'
import { ProductPage } from '../support/page/productpage'
import { DetailedProduct } from '../support/page/detailedProduct'
import { Checkout } from '../support/page/checkoutOrder'
import { UserRegistration } from '../support/page/userRegistration'
import { faker } from '@faker-js/faker'

let login: Login
let productPage: ProductPage
let detailedProduct: DetailedProduct
let checkout: Checkout
let userRegistration: UserRegistration


test.beforeEach(({ page }) => {
    login = new Login(page)
    productPage = new ProductPage(page)
    detailedProduct = new DetailedProduct(page)
    checkout = new Checkout(page)
    userRegistration = new UserRegistration(page)
})

const firstName: string = faker.person.firstName()
const lastName: string = faker.person.lastName()
const zipCode:string = faker.location.zipCode()


test('Primeiro nome obrigatorio', async () => {

    const productName:string = 'Sauce Labs Onesie'
    const productPrice:number = 7.99

    const product = {
        name: productName,
        price: `$${productPrice.toFixed(2)}`
    }

    await login.logIn('standard_user', 'secret_sauce')
    
    await productPage.selectProductByFilter('lohi', product.name, product.price)
    
    await detailedProduct.detailedProduct(product.name, product.price)
    
    await checkout.checkout(product.name, product.price)
    
    await userRegistration.userRegistration('', lastName, zipCode)
    await userRegistration.userRegistrationValidation('Error: First Name is required')
    
    
})

test('Sobrenome obrigatorio', async () => {

    const productName:string = 'Sauce Labs Onesie'
    const productPrice:number = 7.99

    const product = {
        name: productName,
        price: `$${productPrice.toFixed(2)}`
    }

    await login.logIn('standard_user', 'secret_sauce')
    
    await productPage.selectProductByFilter('lohi', product.name, product.price)
    
    await detailedProduct.detailedProduct(product.name, product.price)
    
    await checkout.checkout(product.name, product.price)
    
    await userRegistration.userRegistration(firstName, '', zipCode)
    await userRegistration.userRegistrationValidation('Error: Last Name is required')
    
})

test('Cep obrigatorio', async () => {

    const productName:string = 'Sauce Labs Onesie'
    const productPrice:number = 7.99

    const product = {
        name: productName,
        price: `$${productPrice.toFixed(2)}`
    }

    await login.logIn('standard_user', 'secret_sauce')
    
    await productPage.selectProductByFilter('lohi', product.name, product.price)
    
    await detailedProduct.detailedProduct(product.name, product.price)
    
    await checkout.checkout(product.name, product.price)
    
    await userRegistration.userRegistration(firstName, lastName, '')
    await userRegistration.userRegistrationValidation('Error: Postal Code is required')
    
})