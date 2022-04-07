import currentDate from "../support/date"

describe('Account activity tab actions and fields', () => {
    beforeEach(() => {
        cy.login('username','password')
        cy.get('#account_activity_tab').contains('Account Activity').click()
    })
    it('Show transactions-Savings tab', () => {
        cy.get('.table').contains('984.3').should('exist')
    })
    it('Account select  dropdown', () => {
        cy.get('select').select(0).should('have.value', '1')
        cy.get('select').select('Checking').should('have.value', '2')
        cy.get('select').select(2).should('have.value', '3')
        cy.get('select').select('Loan').should('have.value', '4')
        cy.get('select').select('Credit Card').should('have.value', '5')
        cy.get('table').should('not.exist')
        cy.get('select').select('Brokerage').should('have.value', '6')
        cy.get('table').should('not.exist')
    })
    it.only('Find Transactions tab', () => {
        cy.get('.ui-tabs-nav').contains('Find Transactions').click()
        cy.get('#ui-tabs-2').find('h2').should('contain', 'Find Transactions')
        cy.get('#aa_description').type('OFFICE SUPPLY')
        cy.get('#aa_fromDate').type('2012-09-05')
        cy.get('.ui-datepicker-current-day').click()
        cy.get('#aa_toDate').type(currentDate())
        cy.get('.ui-datepicker-current-day').click()
        cy.get('form').find('[type="submit"]').contains('Find').click()
    })
})