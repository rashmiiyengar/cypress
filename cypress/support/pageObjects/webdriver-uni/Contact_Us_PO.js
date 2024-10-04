class Contact_Us_PO{

    contactFormSubmission(firstName,lastName,email,comments){
        
        cy.get('[name="first_name"]').should('exist').type(firstName);
        cy.get('[name="last_name"]').type(lastName)
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comments);
        cy.get('[type="submit"]').click();  
        
} 

}

export default Contact_Us_PO;