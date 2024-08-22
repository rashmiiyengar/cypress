/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Iterate over elements', () => {

    it.only('Log information of ll haircare products', () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        cy.get("a[href*='/category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list)=>{
            cy.log($el.text());
        });
    });

    it.only('Add specific product to cart', () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        cy.get("a[href*='/category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list)=>{
            if($el.text().includes('Seaweed Conditioner')){
                cy.log($el.text());
            }
          
        });

    });

});