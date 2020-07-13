/// <reference types="cypress" />

// This is a Test Suite
describe('Regression test suite', function(){

    // This is a test case
    it('Perform valid login', function(){

        //1. Open the browser and start the system
        //localhost:3000
        //The application is started.

        cy.visit('http://localhost:3000')

        // Extra Assertion 02
        cy.title().should('include', 'Testers Hotel')

        //2. Assert that the page is correct
        //Login
        //The user is in the right page 
        cy.contains('Login')


    
        //3. Inform/write the username
        //tester01
        //cy.get('div.field:nth-child(1) > input:nth-child(2)') Alternative 01
        cy.get(':nth-child(1) > input').type('tester01')

        //4. Inform/Write the password
        // GteteqbQQgSr88SwNExUQv2ydb7xuf8c

        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        // Push Click on Login button

        //5. Click the login button
        //The user gains access to the system.
        cy.get('.btn').click()

        //6. Assert that the user is on the “Hotel Overview” page 
        //Tester Hotel Overview
        //The user is in the right page.
        cy.contains('Tester Hotel Overview')

        //7. Assert that the right user is logged in
        //Welcome tester01!
        //The user is in the right page.


        //8. Click the View button for “Rooms” window
        // The user gains access to the Create Rooms window.
       
       
        //9. Assert that the user is in “Rooms” window
        //Rooms Reservations
        //The user is in the Rooms Reservations page.
        
        
        //10. Create: Click the Creat Room button
        // The user gains access to the New Room page
        //Assert that the  user is on New Room page
        //New Room
        //The user is in the New Room page
        
        
        //12. Add in valid information (alt. Random valid information) in all available windows
        //And Click Save button
        //  a. Selecting either the first available option from the available dropdowns (or randomly selected) or/and
        //  b. Add other valid values “manually” if there is no dropdown with predefined values available to choose from 
        //The user gets back to the Create 
        //Room page and can see the new created Room in the bottom of the page
        
       
        //13. Assert that the user is on Create Room page
        //Create Room
        //The user is in the Create Room page
        
        
        //14. 
        //Assert that the Creation of Room was successful
        //Floor 1, Room 1
        //The  Creation of Room is successful
        
    
        
        //15. Click the button ‘logout’.
        //The user exits the system is forwarded to the login page.
        cy.get('.user > .btn').click()
    
        //16. Assert that the page is correct
        //Login
        //The user is in the right page
        cy.contains('Login')
        //Extra Assertion 02
        cy.title().should('include', 'Testers Hotel')



    })

})