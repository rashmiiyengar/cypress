/// <reference types="Cypress" />


describe('manage multiple tabs my jsquery workaround', () => {
    it('open contact us page', () => {

        cy.visit("https://webdriveruniversity.com");

        cy.get('#contact-us').invoke('remove','target').click({force:true});

        

    });
});