

describe('Hooks', () => {
    before(()=>{
        cy.log("runs once before all tests in the block");
    });

    after(()=>{
        cy.log("runs once after all tests in the block");
    })

    beforeEach(()=>{
        cy.log("runs  before each tests in the block");
    })

    afterEach(()=>{
        cy.log("runs after each tests in the block");
    })


    it("example test1 ",()=>{
        cy.log("example 1")
    })
    it("example test 2 ",()=>{
        cy.log("example 2")
    })


});