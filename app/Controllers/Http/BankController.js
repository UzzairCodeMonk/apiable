'use strict'
const Bank = use('App/Models/Bank');

class BankController {

    async index ({response}){
        let banks = await Bank.all();
        return response.json(banks);
    }

    async show({params, response}){
        const bank = await Bank.find(params.id);

        return response.json(bank);
    }
}

module.exports = BankController
