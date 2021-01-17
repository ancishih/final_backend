const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const regSchema = new mongoose.Schema({
    account:{
        type:String,
        trim:true,
        required:true,
    },
    password:{
        type:String,
        trim:true,
        required:true,
    },
    gender:{
        type:String,
        trim:true,
        required:true,
        enum:["男","女","不透露"],
        default:"不透露",
    },
    birthdate:{
        type:Date,
        trim:true,
        required:true,
    },
    Date:{
        type:Date,
        default:Date.now
    },
},{_id:false})
regSchema.plugin(AutoIncrement)

regSchema.pre('save', async function (next){
    try{
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(this.password, salt)
        this.password = hash
        next()
    }catch(err){
        next(err)
    }
})

module.exports = mongoose.model('member', regSchema)
