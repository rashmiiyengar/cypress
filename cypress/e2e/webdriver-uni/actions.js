/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe("Actions", ()=>{

    it("Validate if you are able to perform scroll into the view",()=>{
        cy.visit("https://webdriveruniversity.com");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true});
    });

    it("Validate if you are able to drag and drop a draggable item",()=>{
       
        cy.visit("https://webdriveruniversity.com");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true});
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true});
       
        
    });

})
