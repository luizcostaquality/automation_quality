import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import Signup from '../pages/Signup'

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

Given("I access homepage", () => {
    Signup.accessPage()
})

When("I access the login option", () => {
    Signup.clickLoginBtn()
})

And("I insert data incorrects", () => {
    Signup.insertEmail()
    Signup.insertPassword()
})

And("I click the login button", () => {
    cy.get('[data-qa="login-button"]').click()

})

Then("a error message is displayed", () => {
    cy.get('.login-form > form > p')
      .should('have.text','Your email or password is incorrect!')
})

Given("I access page", () => {
    Signup.accessSignupPage()
})

When("I fill the inputs from signup option", () => {
    Signup.nameInput()
    Signup.emailInput()
})

And("I click on Signup button", () =>{
    Signup.clickSignupBtn()
})

Then("I am redirect to form page",() => {
    Signup.formPage()
})
