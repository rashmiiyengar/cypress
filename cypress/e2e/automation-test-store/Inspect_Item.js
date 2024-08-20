/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Inspect automation test store items on home page using chainn  of commands', () => {
    it.only('click on first item using header', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
    });

    it.only('click on first item using itemtext', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();
    });

    it.only('click on first item using index', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').contains('Skinsheen Bronzer Stick').click();
    });
});