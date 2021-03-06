const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

module.exports = (user) => {
    const payload = {
        id:user.id,
        username:user.account
    }
    const secret = process.env.SECRET

    const options = {
        expiresIn:"1d"
    }   
    return jwt.sign(payload, secret, options)
}