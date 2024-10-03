/// <reference types="Cypress" />
describe("Select date picker", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    });
    
    it("Select current date ", () => {
        let date = new Date();
        date.setDate(date.getDate()+5); //get current date
        cy.log(date.getDate())
    });

    it("Select a date in future ", () => {
        cy.get("#datepicker").click();
        let date = new Date();
        date.setDate(date.getDate() +301); //get current date
        
        let futureYear = date.getFullYear();
        let futureMonth = date.toLocaleString("default",{month:"long"})
        let futureDay = date.getDate();

        cy.log("Future year to select: " +futureYear);
        cy.log("Future month to select: " +futureMonth);
        cy.log("Future day to select: " +futureDay);

        function selectMonthAndYear (){

            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currDate)=>{

                if(!currDate.text().includes(futureYear)){
                    cy.get('.next').first().click(); 
                    selectMonthAndYear();
                    cy.log("currdate "+currDate.text())
                }
            }).then(()=>{
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currDate)=>{
                    if(!currDate.text().includes(futureMonth)){
                        cy.get('.next').first().click(); 
                        selectMonthAndYear();
                    }
                })
            })

        }

        function selectFutureDat(){
            cy.get('[class="day"]').contains(futureDay).click()
        }
        
        selectMonthAndYear();
        selectFutureDat();
    });
  });