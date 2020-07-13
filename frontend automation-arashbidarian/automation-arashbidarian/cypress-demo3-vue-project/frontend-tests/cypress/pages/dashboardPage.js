/// <reference types="cypress" />

// elements
const titleOfDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'


// actions/ functions
//====================

//Assertion right page
function checkTitleOfDashboardPage(cy){
    // f.01: Assertion
    cy.title().should('eq', titleOfDashboardPage)
}

function performLogout (cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}


// exports
module.exports =  {
    checkTitleOfDashboardPage,
    performLogout

}
