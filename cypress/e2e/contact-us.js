/// <reference types="Cypress" />

describe("Test Contact us form via WebDriveruniversity", ()=>{

        it("Should be able to submit a successfull submission via contactus form",()=>{
            //cypress code
            
            cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
            //cy.get('#contact-us').invoke('removeAttr', '__').click({force: true});
            cy.get('[name="first_name"]').type("adam");
            cy.get('[name="last_name"]').type("bill")
            cy.get('[name="email"]').type("test@gmail.com")
            cy.get('textarea.feedback-input').type("comments added")
            cy.get('[type="submit"]').click();
        });
 
        it("Should not be able to submit a successfull submission via contact us form as all fields are required",()=>{
            //cypress code
            cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
            cy.get('[name="first_name"]').type("add");
            cy.get('[name="last_name"]').type("bill")
            
            cy.get('textarea.feedback-input').type("comments added")
            cy.get('[type="submit"]').click();
            
        });


})
