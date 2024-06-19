import { test } from '@playwright/test'
import { Login } from '../support/page/login'
import { ProductPage } from '../support/page/productpage'
import { DetailedProduct } from '../support/page/detailedProduct'
import { Checkout } from '../support/page/checkoutOrder'
import { UserRegistration } from '../support/page/userRegistration'
import { CheckoutOverview } from '../support/page/checkoutOverview'
import { FinishOrder } from '../support/page/finishOrder'
import { faker } from '@faker-js/faker'

let login: Login
let productPage: ProductPage
let detailedProduct: DetailedProduct
let checkout: Checkout
let userRegistration: UserRegistration
let checkoutOverview: CheckoutOverview
let finishOrder: FinishOrder

test.beforeEach(({ page }) => {
    login = new Login(page)
    productPage = new ProductPage(page)
    detailedProduct = new DetailedProduct(page)
    checkout = new Checkout(page)
    userRegistration = new UserRegistration(page)
    checkoutOverview = new CheckoutOverview(page)
    finishOrder = new FinishOrder(page)
})

const firstName: string = faker.person.firstName()
const lastName: string = faker.person.lastName()
const zipCode:string = faker.location.zipCode()


test('Comprar o produto mais barato', async () => {

    const productName:string = 'Sauce Labs Onesie'
    const productPrice:number = 7.99
    const taxRate:number = 0.08

    const tax:number = productPrice * taxRate
    const total:number = productPrice + tax

    const product = {
        name: productName,
        price: `$${productPrice.toFixed(2)}`, 
        tax: `Tax: $${tax.toFixed(2)}`, 
        total: `Total: $${total.toFixed(2)}`
    }

    await login.logIn('standard_user', 'secret_sauce')
    
    await productPage.selectProductByFilter('lohi', product.name, product.price)
    
    await detailedProduct.detailedProduct(product.name, product.price)
    
    await checkout.checkout(product.name, product.price)
    
    await userRegistration.userRegistration(firstName, lastName, zipCode)
    
    await checkoutOverview.checkoutOverview(product.name, product.price, product.tax, product.total)
    
    await finishOrder.finishOrder()
    
})

test('Comprar o produto mais caro', async () => {

    const productName:string = 'Sauce Labs Fleece Jacket'
    const productPrice:number = 49.99
    const taxRate:number = 0.08

    const tax:number = productPrice * taxRate
    const total:number = productPrice + tax

    const product = {
        name: productName,
        price: `$${productPrice.toFixed(2)}`, 
        tax: `Tax: $${tax.toFixed(2)}`, 
        total: `Total: $${total.toFixed(2)}`
    }

    await login.logIn('standard_user', 'secret_sauce')
    
    await productPage.selectProductByFilter('hilo', product.name, product.price)
    
    await detailedProduct.detailedProduct(product.name, product.price)
    
    await checkout.checkout(product.name, product.price)
    
    await userRegistration.userRegistration(firstName, lastName, zipCode)
    
    await checkoutOverview.checkoutOverview(product.name, product.price, product.tax, product.total)
    
    await finishOrder.finishOrder()

})

test('Comprar o primeiro produto ordernado pelo alfabeto', async () => {

    const productName:string = 'Sauce Labs Backpack'
    const productPrice:number = 29.99
    const taxRate:number = 0.08

    const tax:number = productPrice * taxRate
    const total:number = productPrice + tax

    const product = {
        name: productName,
        price: `$${productPrice.toFixed(2)}`, 
        tax: `Tax: $${tax.toFixed(2)}`, 
        total: `Total: $${total.toFixed(2)}`
    }

    await login.logIn('standard_user', 'secret_sauce')
    
    await productPage.selectProductByFilter('az', product.name, product.price)
    
    await detailedProduct.detailedProduct(product.name, product.price)
    
    await checkout.checkout(product.name, product.price)
    
    await userRegistration.userRegistration(firstName, lastName, zipCode)
    
    await checkoutOverview.checkoutOverview(product.name, product.price, product.tax, product.total)
    
    await finishOrder.finishOrder()

})

test('Comprar o ultimo produto ordernado pelo alfabeto', async () => {

    const productName:string = 'Test.allTheThings() T-Shirt (Red)'
    const productPrice:number = 15.99
    const taxRate:number = 0.08

    const tax:number = productPrice * taxRate
    const total:number = productPrice + tax

    const product = {
        name: productName,
        price: `$${productPrice.toFixed(2)}`, 
        tax: `Tax: $${tax.toFixed(2)}`, 
        total: `Total: $${total.toFixed(2)}`
    }

    await login.logIn('standard_user', 'secret_sauce')
    
    await productPage.selectProductByFilter('za', product.name, product.price)
    
    await detailedProduct.detailedProduct(product.name, product.price)
    
    await checkout.checkout(product.name, product.price)
    
    await userRegistration.userRegistration(firstName, lastName, zipCode)
    
    await checkoutOverview.checkoutOverview(product.name, product.price, product.tax, product.total)
    
    await finishOrder.finishOrder()

})