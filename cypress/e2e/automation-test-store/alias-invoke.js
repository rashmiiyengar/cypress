/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const { forEach } = require("cypress/types/lodash");

describe('Alias and invoke', () => {

    it('Validate a specific haircare product', () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        cy.get("a[href*='/category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productName');
        cy.get('@productName').its('length').should('be.gt',5);
        cy.get('@productName').should('include','Seaweed Conditioner');
    });

    it('Validate products on home page', () => {
        cy.visit("https://automationteststore.com");

        cy.get('.thumbnail').as('product');

        cy.get('@product').should('have.length',16);
        cy.get('@product').find('.productcart').invoke('attr','title').should('include','Add to Cart')

        
    });

   

});