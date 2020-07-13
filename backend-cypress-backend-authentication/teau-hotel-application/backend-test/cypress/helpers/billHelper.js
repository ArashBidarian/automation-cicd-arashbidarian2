const faker = require('faker')

const ENDPOINT_GET_BILLS = 'http://localhost:3000/api/bills'
const ENDPOINT_POST_BILL = 'http://localhost:3000/api/bill/new'

const ENDPOINT_GET_BILL = 'http://localhost:3000/api/bill/'

function createRandomBillPayload(){
    const fakeValue = faker.finance.amount()
    const fakePaid = faker.random.boolean()


    const payload = {
        "value": fakeValue,
        "paid": fakePaid
    }

    return payload
}

function getRequestAllBillsWithAssertion(cy,value,paid){
        // GET request to fetch all bills 
        cy.request({
            method: "GET",
            url: ENDPOINT_GET_BILLS,
            headers: {
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
        }).then((response => {
            const responseAsString = JSON.stringify(response)
            expect(responseAsString).to.have.string(value)
            expect(responseAsString).to.have.string(paid)

            cy.log(response.body)
            cy.log(response.body[0])
            cy.log(response.body[0].id)
            cy.log(response.body[response.body.length -1].id)   //(För att få sista elementen)****
            cy.log(response.body[0].paid)
            cy.log(response.body[0].value)
            cy.log(response.body.length)

        }))
} 


function getRequestAllBillsRequest(cy){
    cy.authenticateSession().then((response => {
        cy.request({
            method: "GET",
            url: ENDPOINT_GET_BILLS,
            headers: {
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
        }).then((response => {
            const responseAsString = JSON.stringify(response)
            cy.log(responseAsString)
        }))
    }))
}


function deleteRequestBillAfterGet(cy){
    // GET request to fetch all bills 
    cy.request({
        method: "GET",
        url: ENDPOINT_GET_BILLS,
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response => {        
        let lastId = response.body[response.body.length -1].id
        cy.request({
            method: 'DELETE',
            url: ENDPOINT_GET_BILL+lastId,
            headers: {
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
        })

    }))
} 


function createBillRequest(cy){
    cy.authenticateSession().then((response => {
        let fakeBillPayload = createRandomBillPayload()
        //POST request to create a Bill
        cy.request({
            method: "POST",
            url: ENDPOINT_POST_BILL,
            headers: {
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body: fakeBillPayload
        }).then((response => {
            const responseAsString = JSON.stringify(response)
            expect(responseAsString).to.have.string(fakeBillPayload.value)
            expect(responseAsString).to.have.string(fakeBillPayload.paid)
        }))

        getRequestAllBillsWithAssertion(cy,fakeBillPayload.value, fakeBillPayload.paid)
    }))
}



function createBillRequestAndDelete(cy){
    cy.authenticateSession().then((response => {
        let fakeBillPayload = createRandomBillPayload()
        //POST request to create a Bill
        cy.request({
            method: "POST",
            url: ENDPOINT_POST_BILL,
            headers: {
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body: fakeBillPayload
        }).then((response => {
            const responseAsString = JSON.stringify(response)
            //expect(responseAsString).to.have.string(fakeBillPayload.value)

        }))

        // delete
        deleteRequestBillAfterGet(cy)
    }))
}


module.exports = {
    createRandomBillPayload,
    createBillRequest,
    getRequestAllBillsRequest,
    createBillRequestAndDelete
  
}
