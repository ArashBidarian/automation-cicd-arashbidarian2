/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashBoardFuncs from '../pages/dashboardPage'
import * as targets from '../tergets/targets'


// Test suite 
describe('Test suite', function(){
    
    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
    })
    
    // Test case 01: login > go to dashboard > logout
    it('Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        dashBoardFuncs.performLogout(cy, targets.indextitlelogin)
        
    })

    // Test case 02: login > go to dashboard > go to rooms overview page > add room > logout
// it('Perform login and logout', function(){
 //       indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardTitle)
//        dashBoardFuncs.performLogout(cy, 'Login')
        
 //   })



})
