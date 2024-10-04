import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Add multiple items to basket', () => {
    const autostore_Homepage = new AutoStore_Homepage_PO();
    const autostore_Haircare = new AutoStore_HairCare_PO();

    before(()=>{
        cy.fixture("products").then((data)=>{
            globalThis.data=data;
        })
    })

    beforeEach(()=>{
        autostore_Homepage.accessHomePage();
        autostore_Homepage.clickOnHairCareLink();
    })

    it('Add specific items to basket', () => {
       autostore_Haircare.addHairCareProductstoBasket();
    });
    
});