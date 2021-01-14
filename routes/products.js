const { query } = require('express')
const express = require('express')
// const router = require('express').Router()
const router = express.Router()
const product = require('../models/products')


//query all product 
router.get('/', async (req,res) =>{
    const products = await product.find()
    res.json(products)
})

//Create new product
router.post('/add', async(req,res) => {
    const newproduct = new product(req.body);
    const savedproduct = await newproduct.save();
    res.json(savedproduct)
})

//search specific item
router.get('/get/:id', async(req,res) => {
    const prod = await product.findById({_id: req.params.id})
    res.json(prod);
})

//delete specific item
router.delete('/detele/:id', async(req,res) =>{
    const result = await product.findByIdAndDelete({_id:req.params.id})
    res.json(result)
})

//update a specific item
router.patch('/update/:id', async(req,res) =>{
    const pro = await product.updateOne({_id: req.params.id},{$set: req.body})
    res.json(pro)
})

//mongodb find() multi condition
// ?field1=value1&field2=value2&field3=value3
//

module.exports = router;