import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

Given("I access homepage", () => {
    cy.visit("https://automationexercise.com/");
})

When("I access the login option", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
})

And("I insert data incorrects", () => {
    cy.get('[data-qa="login-email"]').type('efpyi@example.com')
    cy.get('[data-qa="login-password"]').type('123456789')
})

And("I click the login button", () => {
    cy.get('[data-qa="login-button"]').click()
})

Then("a error message is displayed", () => {
    cy.get('.login-form > form > p')
      .should('have.text','Your email or password is incorrect!')
})