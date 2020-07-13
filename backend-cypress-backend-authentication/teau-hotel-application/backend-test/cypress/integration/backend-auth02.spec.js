
import * as billHelpers from '../helpers/billHelper'


const LOGIN_URL =  'http://localhost:3000/api/login' 

describe('testing auth', function(){
    
        it ('test case 1- Login (GET)', function(){

            cy.authenticateSession().then((response => {
                cy.request ({
                    method: "GET",
                    url: 'http://localhost:3000/api/bills',
                    headers: {
                        'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                        'Content-Type': 'application/json' 
                    }, 
                }).then(( response => {
                    cy.log(response.body[0].id)
                    cy.log(response.body[0].created)
                    cy.log(response.body[0].value)
                    cy.log(response.body[0].paid)
                }))
            }))
        })

        it ('test case 2 - Create a new Bill (POST)', function(){

            cy.authenticateSession().then((response => {
                const payload = {
                    "paid":true,
                    "value":"66666",
                    "id": "cy.log(response.body[0].value)",
                    "created": "cy.log(response.body[0].created)"
                }

                cy.request ({
                    method: "POST",
                    url: 'http://localhost:3000/api/bill/new',
                    headers: {
                        'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                        'Content-Type': 'application/json' 
                    }, 
                    body:payload
                }).then(( response => {
                    //cy.log(JSON.stringify(response))
                    const responseAsString = JSON.stringify(response)
                    expect(responseAsString).to.have.string(payload.id)
                    expect(responseAsString).to.have.string(payload.created)
                    expect(responseAsString).to.have.string(payload.value)
                    expect(responseAsString).to.have.string(payload.paid)

                }))
            }))
        })

        it.only ('test case 3 - Create a new Random Bill', function(){
            
            cy.authenticateSession().then((response => {
                let fakeBillPayload = billHelpers.createRandomBillPayload()
                //POST request to create a Bill
                cy.request ({
                    method: "POST",
                    url: 'http://localhost:3000/api/bill/new',
                    headers: {
                        'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                        'Content-Type': 'application/json' 
                    }, 
                    body: fakeBillPayload
                }).then(( response => {
                    const responseAsString = JSON.stringify(response)
                    expect(responseAsString).to.have.string(fakeBillPayload.value)

                    //expect(responseAsString).to.have.string(fakeBillPayload.id)
                    //expect(responseAsString).to.have.string(fakeBillPayload.created)
                    //expect(responseAsString).to.have.string(fakeBillPayload.value)
                    expect(responseAsString).to.have.string(fakeBillPayload.paid)
                }))
                // GET request to fetch all bills 
                cy.request ({
                    method: "GET",
                    url: 'http://localhost:3000/api/bills',
                    headers: {
                        'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                        'Content-Type': 'application/json' 
                    }, 
                }).then(( response => {
                    const responseAsString = JSON.stringify(response)
                    //expect(responseAsString).to.have.string(fakeBillPayload.id)
                    //expect(responseAsString).to.have.string(fakeBillPayload.created)
                    expect(responseAsString).to.have.string(fakeBillPayload.value)
                    expect(responseAsString).to.have.string(fakeBillPayload.paid)
                    

                }))

            }))
        })

        it ('test case 4 - EDIT a new Random Bill', function(){
            
            cy.authenticateSession().then((response => {
                let fakeBillPayload = billHelpers.createRandomBillPayload()
                //POST request to create a Bill
                cy.request ({
                    method: "POST",
                    url: 'http://localhost:3000/api/bill/new',
                    headers: {
                        'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                        'Content-Type': 'application/json' 
                    }, 
                    body: fakeBillPayload
                }).then(( response => {
                    const responseAsString = JSON.stringify(response)
                    expect(responseAsString).to.have.string(fakeBillPayload.value)
                }))
                // GET request to fetch all bills 
                cy.request ({
                    method: "GET",
                    url: 'http://localhost:3000/api/bills',
                    headers: {
                        'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                        'Content-Type': 'application/json' 
                    }, 
                }).then(( response => {
                    const responseAsString = JSON.stringify(response)
                    //expect(responseAsString).to.have.string(fakeBillPayload.id)
                    //expect(responseAsString).to.have.string(fakeBillPayload.created)
                    expect(responseAsString).to.have.string(fakeBillPayload.value)
                    expect(responseAsString).to.have.string(fakeBillPayload.paid)
                    

                }))

            }))
        })





        it('test case 5 - DELETE a new Random Bill', function(){
            
            cy.authenticateSession().then((response => {
                let fakeBillPayload = billHelpers.createRandomBillPayload()
                //POST request to create a Bill
                cy.request ({
                    method: "POST",
                    url: 'http://localhost:3000/api/bill/new',
                    headers: {
                        'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                        'Content-Type': 'application/json' 
                    }, 
                    body: fakeBillPayload
                }).then(( response => {
                    const responseAsString = JSON.stringify(response)
                    expect(responseAsString).to.have.string(fakeBillPayload.value)
                }))
                // GET request to fetch all bills 
                cy.request ({
                    method: "GET",
                    url: 'http://localhost:3000/api/bills',
                    headers: {
                        'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                        'Content-Type': 'application/json' 
                    }, 
                }).then(( response => {
                    const responseAsString = JSON.stringify(response)
                    //expect(responseAsString).to.have.string(fakeBillPayload.id)
                    //expect(responseAsString).to.have.string(fakeBillPayload.created)
                    expect(responseAsString).to.have.string(fakeBillPayload.value)
                    expect(responseAsString).to.have.string(fakeBillPayload.paid)
                    

                }))

            }))
        })

















    }) 