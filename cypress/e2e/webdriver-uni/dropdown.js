/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
describe("Dropdown menu", ()=>{

    it("Validate if you are able to select dropdown option",()=>{
       
        cy.visit("https://webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include','Dropdown-Checkboxes-RadioButtons');
        
        cy.get("#dropdowm-menu-1").select('c#');
        cy.get("#dropdowm-menu-2").select('Maven').contains('Maven');
        cy.get("#dropdowm-menu-3").select('CSS').should('have.value','css');
        
    });

})
