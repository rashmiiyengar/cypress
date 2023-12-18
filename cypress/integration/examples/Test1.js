//cypress -spec 

 //describe used to group the testcases together

 describe('My first testcase',()=>{
    it('does not do much',()=>{

        cy.visit("https://rahulshettyacademy.com/seleniumPractise");
       // expect(true).to.equal(false);
       cy.get("input[type='search']").type("ca");
       cy.wait(2000);


       cy.get(".product:visible").should('have.length',4);

       cy.get(".products").find(".product").should("have.length",4);
       cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();

       cy.get(".products").find(".product").each((e)=>{
         const txt=e.find("h4.product-name").text()
         if(txt.includes("Carrot")){
            cy.wrap(e).find("button").click();
         }
       })

    })
 })