/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Add multiple items to basket', () => {
    before(()=>{
        cy.fixture("products").then((data)=>{
            globalThis.data=data;
        })
    })

    beforeEach(()=>{
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        cy.get("a[href*='/category&path=']").contains("Hair Care").click();
    })

    it('Add specific items to basket', () => {
       globalThis.data.productName.forEach(($ele)=>{
        cy.addProductToBasket($ele); 
       })
        

    });

    
});