class AutoStore_Homepage_PO{

    accessHomePage(){
        cy.visit("https://automationteststore.com")
    }

    clickOnHairCareLink(){
        
        cy.get("a[href*='/category&path=']").contains("Hair Care").click();
    }
}

export default AutoStore_Homepage_PO;