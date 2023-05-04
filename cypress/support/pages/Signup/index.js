/// <reference types="Cypress" />

const elLogin = require('./elements').ELEMENTS

class Login {
    clickLoginBtn() {
        cy.get(elLogin.iconLogin).click()
    }

    insertEmail(){
        cy.get(elLogin.emailInput).type('efpyi@example.com')
    }

    insertPassword(){
        cy.get(elLogin.passwordInput).type('123456789')
    }

    accessPage(){
        cy.visit("https://automationexercise.com/")
    }

}
export default new Login()