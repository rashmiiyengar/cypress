/// <reference types="Cypress" />

describe("Test Contact us form via WebDriveruniversity", ()=>{

    beforeEach(()=>{
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.get('#contact-us').invoke('removeAttr', '__').click({force: true});
        cy.document().should('have.a.property','title').and('eq','WebDriver | Contact Us');
        cy.title().should("include","WebDriver | Contact Us");
    })
        it("Should be able to submit a successfull submission via contactus form",()=>{
           
           
            cy.get('[name="first_name"]').type("adam");
            cy.get('[name="last_name"]').type("bill")
            cy.get('[name="email"]').type("test@gmail.com")
            cy.get('textarea.feedback-input').type("comments added")
            cy.get('[type="submit"]').click();   
        });
 
        it("Should not be able to submit a successfull submission via contact us form as all fields are required",()=>{
            
            cy.get('[name="first_name"]').type("add");
            cy.get('[name="last_name"]').type("bill");
            cy.get('textarea.feedback-input').type("comments added");
            cy.get('[type="submit"]').click();
            cy.get('body').contains('Error: all fields are required');
        });

        //Using custom commands
        it.only("using custom commands",()=>{
            cy.webDriverUni_Contactform_Submission("rash","iyer","rrr@gmail.com","thanks")
        });

        // Only opens a testcase below 
        it("Visit home page",()=>{
            cy.visit("/");
            
        });


})
