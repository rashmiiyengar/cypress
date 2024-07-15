///refereence types="cypress"/>

it("Launch website and login",()=>{
  cy.visit("https://askomdch.com/");
  cy.get('#menu-item-1237 > .menu-link').click();
  cy.get('#username').type("Sairam1@gmail.com");
  cy.get('#password',{timeout:6000}).type("Sairam1");
  cy.get(':nth-child(3) > .woocommerce-button').click();

})