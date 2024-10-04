/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
describe("Radio buttons", ()=>{

    it("Check specific radio button",()=>{
       
        cy.visit("/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include','Dropdown-Checkboxes-RadioButtons');
        
        cy.get('#radio-buttons').find("[type='radio']").first().check();
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check();
    });

    it("validate the state of specific radio button",()=>{
       
        cy.visit("/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include','Dropdown-Checkboxes-RadioButtons');
        
        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='pumpkin']").should('be.checked');

        cy.get("[value='lettuce']").check();
        cy.get("[value='lettuce']").should('be.checked');
        cy.get("[value='pumpkin']").should('not.be.checked'); 

        cy.get("[value='cabbage']").should('be.disabled');


    });
})
