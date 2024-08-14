/// <reference types="Cypress" />

describe("Test Contact us form via WebDriveruniversity", ()=>{

        it("Should be able to submit a successfull submission via contactus form",()=>{
            //cypress code
            
            cy.visit("https://webdriveruniversity.com")
            cy.get('#contact-us').click({force: true});

        });
 
        it("Should not be able to submit a successfull submission via contact us form as all fields are required",()=>{
            //cypress code
             

            
        });


})
