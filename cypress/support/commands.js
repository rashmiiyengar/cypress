// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add("selectProduct",(productName)=>{
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list)=>{
        if($el.text().includes(productName)){
            cy.wrap($el).click();
        }
    });
} )

Cypress.Commands.add("naviagetTo_Webdriveruni",()=>{
    cy.visit("/");
    
} )

Cypress.Commands.add("addProductToBasket",(productName)=>{
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list)=>{
        if($el.text() === (productName)){
            cy.log($el.text());
            cy.get(".productcart").eq(index).click();
        }
    });
} )

Cypress.Commands.add("webDriverUni_Contactform_Submission",(firstName,lastName,email,comments,$selector)=>{
            
            cy.get('[name="first_name"]').should('exist').type(firstName);
            cy.get('[name="last_name"]').type(lastName)
            cy.get('[name="email"]').type(email)
            cy.get('textarea.feedback-input').type(comments);
            cy.get('[type="submit"]').click();  
} )

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })