/// <reference types="Cypress" />
describe("Handling data via webdriver uni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    });
    it("Calculate and assert total age of all users", () => {
     
        let userDetails =[];
        let number =0;

        cy.get("#thumbnail-1 td").each(($ele,index,$list)=>{

            userDetails[index] = $ele.text();
            
        }).then(()=>{
            userDetails.forEach((detail, index) => {

                if(Number(userDetails[index])){
                    number+= Number(userDetails[index]);
                }
                //cy.log(`User Detail ${index + 1}: ${detail}`);
            });
            cy.log(number)
            expect(number).to.equal(322);
        })
    });
  

    it("Calculate and assert total age based on last name ", () => {
     cy.get("#thumbnail-1 tr td:nth-child(2)").each(($ele,index,$list)=>{
        const text = $ele.text();

        if(text.includes("Woods")){

            cy.get("#thumbnail-1 tr td:nth-child(2)").eq(index).next().then((age)=>{
                cy.log(age.text());
                expect(age.text()).to.equal('80')
            });
        }
     })
     
    });
  });