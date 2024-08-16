/// <reference types="Cypress" />

describe("Test Contact us form via Automation Test store", ()=>{

    it("Should be able to submit a successfull submission via contact us form",()=>{
       cy.visit("https://automationteststore.com/");
       cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click();
       cy.get('#ContactUsFrm_first_name').type("Joe");
       cy.get('#ContactUsFrm_email').type("joe@gmail.com");
       cy.get('#ContactUsFrm_enquiry').type("do you provide additional discounts ");
       cy.get('button[title="Submit"]').click();
       //cy.get('.maintext').should('contain.text', 'CONTACT US');

    });


  


})
