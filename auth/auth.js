const express = require("express");
const generateToken = require("./token");
const bcrypt = require("bcryptjs");
const router = express.Router();
const regSchema = require('../models/member')
const createError = require('http-error')
const { regSchema_valid, loginSchema_valid } = require('../helper/validation')

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
        if(error.isJoi === true) error.status=422 
        next(error)
    }
})

router.post('/login', async(req,res,next) => {
    try{
        
        const { account, password } = req.body
        // res.send(req.body)
        const user = await loginSchema_valid.validateAsync(req.body)
        // res.send(user)
        if(!user ) throw createError.NotFound('請輸入有效的帳號與密碼')

        const doExist = await regSchema.findOne({account:user.account})
        
        if(doExist){
            const token = generateToken(user)
            res.status(200).json({message:`歡迎 ${user.account}!`, token})
            res.send('hi')
        }            
    } catch (error) {
        if (error.isJoi === true)
          return next(createError.BadRequest('Invalid Username/Password'))
        next(error)
    }
})


//mongodb find() multi condition
// ?field1=value1&field2=value2&field3=value3
//

module.exports = router;