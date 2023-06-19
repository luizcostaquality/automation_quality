/// <reference types="Cypress" />
import dataSignup from "../../../fixtures/dataSignup.json"

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
        cy.get(elLogin.insertNameInput).type(dataSignup.name)
    }

    emailInput(){
        cy.get(elLogin.insertEmail).type(dataSignup.email)
    }

    clickSignupBtn(){
        cy.get(elLogin.btnSignup).click()
    }

    formPage(){
        cy.get(elLogin.redirectPage).click()
        cy.get(elLogin.gender).click()
        cy.get(elLogin.passwordCreate).type(dataSignup.password)
        cy.get(elLogin.birthDay).select('10')
        cy.get(elLogin.birthMonth).select('4')
        cy.get(elLogin.birthYear).select('2014')
        cy.get(elLogin.insertFirstName).type(dataSignup.name)
        cy.get(elLogin.insertLastName).type(dataSignup.lastName)
        cy.get(elLogin.companyID).type(dataSignup.company)
        cy.get(elLogin.addressID).type(dataSignup.address)
        //cy.get(elLogin.chooseCountry).select('Israel')
        //cy.get(elLogin.insertState).type(dataSignup.state)
        //cy.get(elLogin.insertCity).type(dataSignup.state)
        //cy.get(elLogin.insertZipCode).type(dataSignup.code)
        if (Cypress.env('country') === "Singapore"){
            cy.get(elLogin.chooseCountry).select('Singapore')
            cy.get(elLogin.insertState).type('Singapore')
            cy.get(elLogin.insertCity).type('Singapore')
            cy.get(elLogin.insertZipCode).type('8787')
        }
        if (Cypress.env('country') === "Canada"){
            cy.get(elLogin.chooseCountry).select('Canada')
            cy.get(elLogin.insertState).type('Canada')
            cy.get(elLogin.insertCity).type('Toronto')
            cy.get(elLogin.insertZipCode).type('1234')
        }
        if (Cypress.env('country') === "Australia"){
            cy.get(elLogin.chooseCountry).select('Australia')
            cy.get(elLogin.insertState).type('Nova Gales do Sul')
            cy.get(elLogin.insertCity).type('Sydney')
            cy.get(elLogin.insertZipCode).type('2112')
        }

        cy.get(elLogin.insertPhoneNumber).type(dataSignup.phone)
    }

    pdpPage(){
        cy.visit("https://automationexercise.com/product_details/1")
    }

    elementsInspection(){
        cy.get(elLogin.productImage)
        cy.get(elLogin.productQuantity)
        cy.get(elLogin.buttonAdd)
        cy.get(elLogin.nameField)
        cy.get(elLogin.emailField)
        cy.get(elLogin.reviewField)

    }
}
export default new Signup()