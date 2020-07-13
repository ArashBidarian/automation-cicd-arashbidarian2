/// <reference types="cypress" />

// This is a Test Suite
describe('Regression test suite', function(){

    // This is a test case
    it('Perform valid login', function(){
        cy.visit('http://localhost:3000')
        // Assertion01
        cy.title().should('include', 'Testers Hotel')
        // Assertion02
        cy.contains('Login')
        
        //cy.get('div.field:nth-child(1) > input:nth-child(2)') Alternative 01
        // Write in Username "tester01"
        cy.get(':nth-child(1) > input').type('tester01')
        // User password
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        // Push Click on Login button
        cy.get('.btn').click()
        // Assertion när inloggad
        cy.contains('Tester Hotel Overview')


        //logout by clicking on logout button
        cy.get('.user > .btn').click()
        // Assertion01
        cy.title().should('include', 'Testers Hotel')
        // Assertion02
        cy.contains('Login')

    })

})