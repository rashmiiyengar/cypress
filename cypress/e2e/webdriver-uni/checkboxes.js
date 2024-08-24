/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
describe("Checkboxes", ()=>{

    it("Validating checkboxes",()=>{
       
        cy.visit("https://webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include','Dropdown-Checkboxes-RadioButtons');
        
        //cy.get('#checkboxes > :nth-child(1) > input').check();
       // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        cy.get('@option-1').check();
        cy.get('@option-1').should('be.checked');

    });

    it("Uncheck and Validating checkboxes",()=>{
       
        cy.visit("https://webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include','Dropdown-Checkboxes-RadioButtons');
        
        cy.get(':nth-child(5) > input').as('option-3');
        cy.get('@option-3').uncheck();
        cy.get('@option-3').should('not.be.checked');

    });


    it.only("Check and Validating multiple checkboxes",()=>{
       
        cy.visit("https://webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include','Dropdown-Checkboxes-RadioButtons');
        
        cy.xpath("//input[@type='checkbox']").check(["option-1","option-2","option-3","option-4"]).should('be.checked');
        cy.xpath("//input[@type='checkbox']").uncheck();

    });


})
