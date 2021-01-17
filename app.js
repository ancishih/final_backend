const express = require('express')
const mongoose = require('mongoose')
const app = express() 
const session = require('express-session')
const prodRoute = require('./routes/products')
// const registerRoute = require('./routes/register')
const cors = require("cors")
// const restricted = require('')
const authRoute = require('./auth/auth')

app.listen(3001, console.log("Listening on port 3001"))


app.use(cors());
//Database connection
mongoose.connect('mongodb://localhost/final_project',{useNewUrlParser:true, useUnifiedTopology:true})

const db = mongoose.connection;

db.once('open', ()=>{
 console.log("connect to mongodb...")
})

//set session
// const sessionConfig = {
//     name:'helloworld',
//     secret:process.env.SECRET,
//     cookie:{
//         maxAge:3600000, //1hr
//         secure:false,
//         httpOnly:true,
//     },
//     resave:false,
//     saveUnititialized:true,
// }

// app.use(session(sessionConfig))

//use parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//error message handler
app.use((err, req, res, next) =>{
    res.status(err.status || 500)
    res.send({
        error:{
            status:err.status || 500,
            message:err.message
        },
    })
})


//Route
app.use('/api/auth', authRoute)

app.use('/products',prodRoute)

// app.use('/api/register' ,registerRoute)


