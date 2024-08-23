/// <reference types="Cypress" />

describe("Validate web driver uni home page links", ()=>{

    it("Confirm link redirects to correct pages",()=>{
       
        cy.visit("https://webdriveruniversity.com");
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true});
        cy.url().should('include','contactus');
        
        cy.go('back');
        
        cy.reload();
        cy.reload(); //reload without using cache
        cy.url().should('include','webdriveruniversity');

        cy.go('forward');
        cy.url().should('include','contactus');

        cy.go('back');
        cy.get('#login-portal').invoke('removeAttr','target').click({force:true});
        cy.url().should('include','Login-Portal');
        cy.go('back');

    });

   


})
