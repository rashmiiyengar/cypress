/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Verifying variables, cypress commands and jquery commands', () => {
    it('navigated to specific product page', () => {
        cy.visit("https://automationteststore.com/");
         cy.get("a[href*='/category&path=']").contains("Makeup").click();

        //following code will fail
        //const header= cy.get("h1 .maintext");
        //cy.log(header.text());

        cy.get("h1 .maintext").then(($headerText)=>{
            const headerText = $headerText.text();
            cy.log("found header text " +headerText);
            expect(headerText).is.eq("Makeup");
        })
    });

    it.only('Validate properties of contactus page', () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");

        //Use cypress commands and chaining
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name');

        //jquery approach
        cy.contains('#ContactUsFrm','Contact Us Form').then((text)=>{
            const fname = text.find('#field_11').text();
            expect(fname).to.contain('First name');

            //Embedded commands closures
            cy.get('#field_11').then((fnText)=>{
                cy.log(fnText.text());

            })

        })

        //embedded commands closures
        


    });

});