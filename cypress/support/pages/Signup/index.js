/// <reference types="Cypress" />

const elLogin = require('./elements').ELEMENTS

class Signup {
    clickLoginBtn() {
        cy.get(elLogin.iconLogin).click()
    }

    insertEmail() {
        cy.get(elLogin.emailInput).type('efpyi@example.com')
    }

    insertPassword() {
        cy.get(elLogin.passwordInput).type('123456789')
    }

    accessPage() {
        cy.visit("https://automationexercise.com/")
    }

    accessSignupPage() {
        cy.visit("https://automationexercise.com/signup")
    }

    nameInput(){
        cy.get(elLogin.insertNameInput).type(elLogin.name)
    }

    emailInput(){
        cy.get(elLogin.insertEmail).type(elLogin.email)
    }

    clickSignupBtn(){
        cy.get(elLogin.btnSignup).click()
    }

    formPage(){
        cy.get(elLogin.redirectPage).click()
        cy.get(elLogin.gender).click()
        cy.get(elLogin.passwordCreate).type(elLogin.password)
        cy.get(elLogin.birthDay).select('10')
        cy.get(elLogin.birthMonth).select('4')
        cy.get(elLogin.birthYear).select('2014')
        cy.get(elLogin.insertFirstName).type(elLogin.name)
        cy.get(elLogin.insertLastName).type(elLogin.lastName)
        cy.get(elLogin.companyID).type(elLogin.company)
        cy.get(elLogin.addressID).type(elLogin.address)
        cy.get(elLogin.chooseCountry).select('Israel')
        cy.get(elLogin.insertState).type(elLogin.state)
        cy.get(elLogin.insertCity).type(elLogin.state)
        cy.get(elLogin.insertZipCode).type(elLogin.code)
        cy.get(elLogin.insertPhoneNumber).type(elLogin.phone)
    }
}
export default new Signup()