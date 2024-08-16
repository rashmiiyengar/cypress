/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


describe("Test Contact us form via Automation Test store", ()=>{

    it("Should be able to submit a successfull submission via contact us form",()=>{
       cy.visit("https://automationteststore.com/");
        cy.get("a[href$='contact']").click();

      //cy.xpath("//a[contains(@href,'contact')]").click();
      //cy.xpath("//input[@id='ContactUsFrm_first_name']").type("Joe");
       cy.get('#ContactUsFrm_first_name').type("Joe");
       cy.get('#ContactUsFrm_email').type("joe@gmail.com");
       cy.get('#ContactUsFrm_enquiry').type("do you provide additional discounts ");
       cy.get('button[title="Submit"]').click();
       //cy.get('.maintext').should('contain.text', 'CONTACT US');

    });

    /// <reference types="Cypress" />
    describe("Selector examples", () => {
    it("Examples of Selectors via WebdriverUni Contact Us Page", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

        //By tag name
        cy.get("input")

        //By attribute name and value
        cy.get("input[name='first_name']")

        //By id
        cy.get("#contact_me")

        //By class
        cy.get(".feedback-input")

        //By multiple classes
        cy.get("[class='navbar navbar-inverse navbar-fixed-top']")

        //By two different attributes
        cy.get("[name='email'][placeholder='Email Address']")

        //By xpath
        cy.xpath("//input[@name='first_name']")
    })
})

  


})
