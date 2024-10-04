/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Iterate over elements', () => {

    it('Log information of ll haircare products', () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        cy.get("a[href*='/category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list)=>{
            cy.log($el.text());
        });
    });

    it('Add specific product to cart', () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        cy.get("a[href*='/category&path=']").contains("Hair Care").click();

        // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list)=>{
        //     if($el.text().includes('Seaweed Conditioner')){
        //         cy.wrap($el).click();
        //     }
        // });
        //using custom commands
        cy.selectProduct('Seaweed Conditioner');

    });

});