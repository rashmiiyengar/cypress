/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe("Handling Autocomplete", ()=>{
    it("Validate autocomplete sugestions are displayed and select specific product",()=>{

        cy.visit("https://webdriveruniversity.com");
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force: true});

        cy.get('#myInput').type('A');
        cy.get('#myInputautocomplete-list > *').each(($ele,index,$list)=>{
          const prod=  $ele.text();
          const prodToSel = 'Avacado';

            if(prod === prodToSel)
            {
                $ele.trigger('click');

                cy.get('#submit-button').click();
                cy.url().should('include',prodToSel);
                
            }
            }).then(()=>{

                cy.get('#myInput').type('g');
                cy.get('#myInputautocomplete-list > *').each(($ele,index,$list)=>{
                    const prod=  $ele.text();
                    const prodToSel = 'Grapes';
          
                      if(prod === prodToSel)
                      {
                          $ele.trigger('click');
          
                          cy.get('#submit-button').click();
                          cy.url().should('include',prodToSel);
                          
                      }
                    })
            })
    });
});