describe('File upload', () => {
    it('file upload', () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
        cy.get("#myFile").selectFile("cypress/fixtures/Final_Invite.png");
        cy.get("#submit-button").click();
    });
    it('no file upload', () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
        
        cy.get("#submit-button").click();
    });
});