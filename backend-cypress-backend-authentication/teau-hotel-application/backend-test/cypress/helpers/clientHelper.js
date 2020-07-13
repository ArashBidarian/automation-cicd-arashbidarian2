const faker = require('faker')


function createRandomClientPayload(){
    const fakeName = faker.name.firstName()
    const fakeEmail = faker.internet.email()
    const fakePhone = faker.phone.phoneNumber()

    const payload = {
        "name": fakeName,
        "email": fakeEmail,
        "telephone":fakePhone
    }

    return payload
}



//function createRandomBillPayload(){
//    cont fakeValue = faker.finance.amount()
//    const payload2 = {
//        "value": fakeValue,

//    }
//    return payload2

//}

module.exports = {
    createRandomClientPayload
    //createRandomBillPayload
  
}