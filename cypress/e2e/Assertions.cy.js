it("Assertions example",()=>{
    cy.visit("https://example.cypress.io/");
    cy.contains('get').click();

    //should contain assertions
    //implicit assertion
    cy.get('#query-btn').should('contain','Button').and('be.visible').and('be.enabled');
    
    //explicit
    assert.equal()
    expect(true).to.be.equal(true)

  })