const elHeader = require('./elements').ELEMENTS
import accessData from  "../../../fixtures/accessData.json"

//const elMyAccount = require('../MyAccount/elements').ELEMENTS

class CrossPage{

    vistPage(){
      cy.visit(elHeader.homePage);
    }

  clickBtnLogin() {
    cy.get(elHeader.btnLogin).click({force:true});
  }

  cickBtnLoginandPassword(){
    cy.wait(2000);
    cy.get(elHeader.btnLoginPassword).click();
  }

  clickEmailfield(){
    cy.get(elHeader.btnEmail).type(accessData.correctEmail);
  }

  clickPasswordcorrectfield(){
    cy.get(elHeader.btnPassword).type(accessData.correctPassword);
  }
  clickPasswordincorretfield(){
    cy.get(elHeader.btnPassword).type(accessData.incorrectPassword);
  }

  clickBtnEnter(){
    cy.get(elHeader.btnEnter).click();
  }

  checkLoginOK(){
    cy.get(elHeader.btnLoginON).should('have.text', 'Olá, Fernando');
  }

  checkLoginNOK(){
    cy.get(elHeader.btnLoginNOK).should('have.text','Usuário e/ou senha incorretos');
  }

}

export default new CrossPage()