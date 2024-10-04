describe('Hooks', () => {
    before(()=>{
        // cy.fixture('example.json').then((data)=>{
        //     globalThis.data=data;
        // })
        cy.fixture('example').as('user')
    })

    it("Should be able to submit a successfull submission via contactus form",()=>{
           
        cy.visit("https://webdriveruniversity.com");
        cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
        
        cy.document().should('have.a.property','title').and('eq','WebDriver | Contact Us');
        cy.title().should("include","WebDriver | Contact Us");

        //below using alias
        cy.get("@user").then((user)=>{
        cy.get('[name="first_name"]').type(user.firstName);
        cy.get('[name="last_name"]').type(user.lastName)
        cy.get('[name="email"]').type(user.email)
        cy.get('textarea.feedback-input').type(user.body)
        })
        
        cy.get('[type="submit"]').click();   
    });

    


});