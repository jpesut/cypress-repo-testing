describe('Account summary tab actions and fields', () => {
    beforeEach(() => {
        cy.login('username', 'password')
        cy.contains('Account Summary').should('exist')
    })

    it('Checking all the fields on the tab', () => {
        cy.contains('Cash Accounts').should('exist')
        cy.contains('Investment Accounts').should('exist')
        cy.contains('Credit Accounts').should('exist')
        cy.contains('Loan Accounts').should('exist')
    })
})