/// <reference types="cypress" />

// elements
const titleOfDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'

//const roomsOverviewPageButton = ':nth-child(1) > .btn'
//const clientsOverviewpageButton = ':nth-child(2) > .btn'
//const billsOverviewPageButton = ':nth-child(3) > .btn'
//const reservationOverviewPageButton = ':nth-child(4) > .btn' 

//Andra sidor
//roomsOverviewPage.js
    //roomsCreatePage.js
//clientsOverviewpage.js
    //cliensCreatePage.js
//billsOverviewPage.js
    //billsPage.js
//reservationOverviewPage.js
    //reservationsPage.js

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


//function goToRoomsOverviewPage (cy, contentToConfirm){
//    cy.get(roomsOverviewPage).click()
//    cy.contains(contentToConfirm)
//}

//function goToClientsOverviewpage (cy, contentToConfirm){
//    cy.get(clientsOverviewpageButton).click()
//    cy.contains(contentToConfirm)
//}
//function goToBillsOverviewPage (cy, contentToConfirm){
//    cy.get(billsOverviewPageButton).click()
//    cy.contains(contentToConfirm)
//}
//function goToReservationOverviewPage (cy, contentToConfirm){
//    cy.get(reservationOverviewPageButton).click()
//    cy.contains(contentToConfirm)
//}



module.exports =  {
    checkTitleOfDashboardPage,
    performLogout

}
