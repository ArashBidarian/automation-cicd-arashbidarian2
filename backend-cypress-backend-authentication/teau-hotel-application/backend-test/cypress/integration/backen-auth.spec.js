
import * as clientHelpers from '../helpers/clientHelper'

const LOGIN_URL =  'http://localhost:3000/api/login' 

describe('testing auth', function(){
    
        it ('test case 1- Login', function(){

            cy.authenticateSession().then((response => {
                cy.request ({
                    method: "GET",
                    url: 'http://localhost:3000/api/clients',
                    headers: {
                        'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                        'Content-Type': 'application/json' 
                    }, 
                }).then(( response => {
                    cy.log(response.body[0].id)
                    cy.log(response.body[0].created)
                    cy.log(response.body[0].name)
                    cy.log(response.body[0].email)
                    cy.log(response.body[0].telephone)
                }))
            }))
        })

        it ('test case 2 - Create a new Client', function(){

            cy.authenticateSession().then((response => {
                const payload = {
                    "name":"Arash3",
                    "email":"arash3@email.com",
                    "telephone":"12345678903"
                }

                cy.request ({
                    method: "POST",
                    url: 'http://localhost:3000/api/client/new',
                    headers: {
                        'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                        'Content-Type': 'application/json' 
                    }, 
                    body:payload
                }).then(( response => {
                    //cy.log(JSON.stringify(response))
                    const responseAsString = JSON.stringify(response)
                    expect(responseAsString).to.have.string(payload.name)
                    //expect(responsAsString).to.have.string(payload.email)
                    //expect(responsAsString).to.have.string(payload.telephone)

                }))
            }))
        })

        it.only ('test case 3 - Create a new Random Client', function(){
            
            cy.authenticateSession().then((response => {
                let fakeClientPayload = clientHelpers.createRandomClientPayload()
                //POST request to create a 
                cy.request ({
                    method: "POST",
                    url: 'http://localhost:3000/api/client/new',
                    headers: {
                        'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                        'Content-Type': 'application/json' 
                    }, 
                    body: fakeClientPayload
                }).then(( response => {
                    const responseAsString = JSON.stringify(response)
                    expect(responseAsString).to.have.string(fakeClientPayload.name)
                }))
                // GET request to fetch all client 
                cy.request ({
                    method: "GET",
                    url: 'http://localhost:3000/api/clients',
                    headers: {
                        'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                        'Content-Type': 'application/json' 
                    }, 
                }).then(( response => {
                    const responseAsString = JSON.stringify(response)
                    expect(responseAsString).to.have.string(fakeClientPayload.name)
                    expect(responseAsString).to.have.string(fakeClientPayload.email)
                    expect(responseAsString).to.have.string(fakeClientPayload.telephone)

                }))

            }))
        })



    }) 