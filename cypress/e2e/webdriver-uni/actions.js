/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe("Actions", ()=>{

    it("Validate if you are able to perform scroll into the view",()=>{
       
        cy.visit("https://webdriveruniversity.com");
        cy.get('#actions').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include','Actions');
        
       
        
    });

})
