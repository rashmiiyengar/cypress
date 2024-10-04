import Homepage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";
/// <reference types="Cypress" />

describe("Test Contact us form via WebDriveruniversity", ()=>{
    const homepage_PO = new Homepage_PO;
    const contactus_PO= new Contact_Us_PO();
    before(()=>{
        cy.fixture("example").then((data)=>{
            globalThis.data=data;
        })
    })

    beforeEach(()=>{
        homepage_PO.visitHomePage();
        homepage_PO.clickon_Contactus_Button();
        //cy.document().should('have.a.property','title').and('eq','WebDriver | Contact Us');
        //cy.title().should("include","WebDriver | Contact Us");
    })
        
        it("Should be able to submit a successfull submission via contactus form",()=>{
            const contactus_PO= new Contact_Us_PO();
            contactus_PO.contactFormSubmission(data.firstName,data.lastName,data.email,data.body);
        });
 
        it.only("Should not be able to submit a successfull submission via contact us form as all fields are required",()=>{
            contactus_PO.contactFormSubmission(data.firstName,data.lastName,data.email,data.body);
        });

        it("using envirnoment variables ",()=>{
         cy.webDriverUni_Contactform_Submission(Cypress.env("firstName"),data.lastName,data.email,data.body) 
        });


})
