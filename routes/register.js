const express = require('express')
const router = express.Router()
const regSchema = require('../models/member')
const createError = require('http-error')
const { regSchema_valid } = require('../helper/validation')

router.post('/register', async(req,res,next) => {
    try{
        const { account, password, gender, birthdate } = req.body
        const result = await regSchema_valid.validateAsync(req.body)

        const doExist = await regSchema.findOne({account:result.account})
        
        if(doExist) throw createError.Conflict(`${result.account}已經被註冊`)

        const user = new regSchema(result)
        const savedUser = await user.save()
        res.json(savedUser)
    }catch(error){
        if(error.isJoi == true) error.status=422 
        next(error)
    }
})



//mongodb find() multi condition
// ?field1=value1&field2=value2&field3=value3
//

module.exports = router;