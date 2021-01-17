const mongoose = require('mongoose')
// const AutoIncrement = require('mongoose-sequence')(mongoose)

const productSchema = new mongoose.Schema({
    prod_name:{
        type:String,
        trim:true,
        required:true,
    },
    prod_category:{
        type:String,
        trim:true,
        required:true,
    },
    occation_category:{
        type:[String],
        trim:true,
    },
    order_method:{
        type:String,
        trim:true,
        required:true,
    },
    prod_price:{
        type:String,
        trim:true,
        required:true,
    },
    buffer_time:{
        type:String,
        trim:true,
        required:true,
    },
    shipping_method:{
        type:String,
        trim:true,
        required:true,
    },
    prod_img:{
        type:String,
        trim:true,
        required:true,
    },
    prod_info:{
        type:String,
        trim:true,
        required:true,
    },
    prod_detail:{
        type:[String],
        trim:true,
        required:true,
    },
    stock:{
        type:[String],
        trim:true,
        required:true,
    }
},{_id:false})
// productSchema.plugin(AutoIncrement)


module.exports = mongoose.model('products', productSchema)