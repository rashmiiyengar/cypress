/// <reference types="Cypress" />

describe('Same origin policy', () => {
    

    it.only('Validate visiting sub domain', () => {
        cy.visit("https://webdriveruniversity.com");

        cy.get("#automation-test-store").invoke('remove','target').click();
    });

    it.only('Origin command', () => {
        cy.origin("webdriveruniversity.com",()=>{
            cy.visit('/');
        });
        cy.origin("automationteststore.com/",()=>{
            cy.visit('/');
        }); 
       
    });
});