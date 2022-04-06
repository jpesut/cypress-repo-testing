// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.visit('http://zero.webappsecurity.com/')
    cy.url().should('include', 'zero.webappsecurity')
    cy.get('#signin_button').click()
    cy.get('h3').should('contain', 'Log in to ZeroBank')
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('[type="checkbox"]').check()
    cy.get('[type="checkbox"]').should('be.checked')
    cy.get('[type="submit"]').click()
})
