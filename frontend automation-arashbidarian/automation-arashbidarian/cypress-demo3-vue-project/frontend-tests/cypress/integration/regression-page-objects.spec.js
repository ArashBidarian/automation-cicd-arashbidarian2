/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashBoardFuncs from '../pages/dashboardPage'
import * as targets from '../tergets/targets'


// Test suite 
describe('Test suite', function(){
    
    this.beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
    })
    
    // Test case
    it('Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.performLogout(cy, 'Login')
        
    })

})
