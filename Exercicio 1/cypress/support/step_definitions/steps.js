import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import crossPage from '../pages/crossPage'
import PdpPage from '../pages/pdp'

Given("I'm on the home page", () => {
    crossPage.vistPage();

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
           return false
      })
})

When("I do login using correct email and password", () => {
    crossPage.clickBtnLogin();
    crossPage.cickBtnLoginandPassword();
    crossPage.clickEmailfield();
    crossPage.clickPasswordcorrectfield();
    crossPage.clickBtnEnter();
})

Then("I must be logged on the site", () => {
    crossPage.checkLoginOK();
})

When("I do login using incorrect password", () => {
    crossPage.clickBtnLogin();
    crossPage.cickBtnLoginandPassword();
    crossPage.clickEmailfield();
    crossPage.clickPasswordincorretfield();
    crossPage.clickBtnEnter();
})

Then("Must be informed that the data access are wrong", () => {
crossPage.checkLoginNOK();
})

Given("I'm on the product detail page", () => {
    PdpPage.urlPDP();

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
           return false
      })

})

Then("the product value is visible", () => {
    PdpPage.validatePrice();
})

Then("The product image should be displayed", () => {
    PdpPage.validateImgPdpMainProductImage();
})