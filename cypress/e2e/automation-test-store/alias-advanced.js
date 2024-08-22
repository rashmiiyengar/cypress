/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Alias and invoke", () => {
  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com");
    cy.get(".thumbnail").as("productThumbnail");

    let itemsTotal = 0;
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("non-sale-items");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("sale-items");

    cy.get("@non-sale-items").then(($linktext) => {
      let nonsaleTotal = 0;
      let itemPrice = $linktext.split("$");
      itemPrice.forEach((item) => {
        const price = parseFloat(item.trim());
        if (!isNaN(price)) {
          nonsaleTotal += price;
        }
      });
      itemsTotal += nonsaleTotal;
      cy.log("non sale items total " + nonsaleTotal);
    });

    cy.get("@sale-items")
      .then(($linktext) => {
        let saleItems = 0;
        let itemPrice = $linktext.split("$");
        itemPrice.forEach((item) => {
          const price = parseFloat(item.trim());
          cy.log(price);
          if (!isNaN(price)) {
            saleItems += price;
          }
        });
        itemsTotal += saleItems;
        cy.log("sale items total " + saleItems);
      })
      .then(() => {
        cy.log("Total of both sale and non sale items " + itemsTotal);
      });
  });
});
