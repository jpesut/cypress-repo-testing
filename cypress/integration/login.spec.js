describe('Logging into application', () => {

    it('Logging with invalid credentials', () => {
        cy.login('nonvalidusername', 'nonvalidpassword')
        cy.get('.alert-error').should('contain', 'Login and/or password are wrong.')
    })

    it('Sending forgotten password via email', () => {
        cy.login('nonvalidusername', 'nonvalidpassword')
        cy.get('.alert-error').should('contain', 'Login and/or password are wrong.')
        cy.contains('Forgot your password ?').click()
        cy.get('h3').should('contain', 'Forgotten Password')
        cy.get('#user_email').type('text@email.com')
        cy.get('[name="submit"]').click()
    })
    
    it.only('Logging with valid credentials', () => {
        cy.login('username','password')
    })
})