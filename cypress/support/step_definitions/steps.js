import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import Login from '../pages/Signup'

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

Given("I access homepage", () => {
    Login.accessPage()
})

When("I access the login option", () => {
    Login.clickLoginBtn()
})

And("I insert data incorrects", () => {
    Login.insertEmail()
    Login.insertPassword()
})

And("I click the login button", () => {
    cy.get('[data-qa="login-button"]').click()
  
})

Then("a error message is displayed", () => {
    cy.get('.login-form > form > p')
      .should('have.text','Your email or password is incorrect!')
})

And("I insert data on the inputs fields", () => {
    Login.insertEmail()
    Login.insertPassword()
})

Then("They are inserted correctly", () => {
    cy.wait(500)
})
