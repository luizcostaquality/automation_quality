const elPdpPage = require('./elements').ELEMENTS


class PdpPage {
  urlPDP() {
  cy.visit(elPdpPage.urlPDP);
  }

  validatePrice() {
    cy.wait(5000);
    cy.get(elPdpPage.priceImage).first().should('be.visible');
  }

  validateImgPdpMainProductImage() {
    cy.get(elPdpPage.productImage).should('be.visible');
  }

}
export default new PdpPage()
