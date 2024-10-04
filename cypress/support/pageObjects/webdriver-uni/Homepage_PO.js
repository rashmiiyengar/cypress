class Homepage_PO{

    visitHomePage(){
        cy.visit(Cypress.env("webdriveruni_homepage"));
    }

    clickon_Contactus_Button(){
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
    }

}

export default Homepage_PO;