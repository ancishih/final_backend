// const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
// const loginSchema = new mongoose.Schema({
//     account:{
//         type:String,
//         trim:true,
//         required:true,
//     },
//     password:{
//         type:String,
//         trim:true,
//         required:true,
//     },
// })

// loginSchema.pre('save', async function (next){
//     try{

//         if (this.isNew) {
//             const salt = await bcrypt.genSalt(10)
//             const hash = await bcrypt.hash(this.password, salt)
//             this.password = hash
//         }
//         next()
//     }catch(err){
//         next(err)
//     }
// })

// loginSchema.method.isValidPassword = async function(password) {
//     try{
//         return await bcrypt.compare(password, this.password)
//     }catch(err) {
//         throw err
//     }
// }


// module.exports = mongoose.model('member', loginSchema)