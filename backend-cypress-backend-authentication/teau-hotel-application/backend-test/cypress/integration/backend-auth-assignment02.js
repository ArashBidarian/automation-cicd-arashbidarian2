
import * as billHelpers from '../helpers/billHelper'


const LOGIN_URL = 'http://localhost:3000/api/login'

describe('testing auth', function () {
    it('test case 1 - Create a new Random Bill (GET & POST)', function () {
        billHelpers.createBillRequest(cy)
    })

    it.only ('test case 2 - Get all bills (GET)', function(){
        billHelpers.createBillRequest(cy)
    })

    it.only('test case 3 - Creatre a Bill & delete it (GET & DELETE)', function(){
        billHelpers.createBillRequestAndDelete(cy)
    })


}) 