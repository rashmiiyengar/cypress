/// <reference types="Cypress" />

describe("alerts", ()=>{

    it("Validate the confirm js alert contain correct text",()=>{
       
        cy.visit("https://webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true});
        cy.get('#button1').click();
        cy.on('window:alert',(str)=>{
            expect(str).to.eql('I am an alert box!');
        })
    });

    it("Validate js confirm alert box works correctly when clicking ok",()=>{
       
        cy.visit("https://webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true});
        cy.get('#button4').click();

        cy.on('window:confirm',(str)=>{
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
        
    });

    //The confirm method is used to display a message to the user 
    //with two options: "OK" and "Cancel." It allows the user to confirm or cancel an action.
    it("Validate js confirm alert box works correctly when clicking cancel",()=>{
       
        cy.visit("https://webdriveruniversity.com");
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true});
        cy.get('#button4').click();

        cy.on('window:confirm',(str)=>{
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
        
    });
})
