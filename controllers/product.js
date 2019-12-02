const Product = require('../models/product')
const Schema = require('mongoose').Schema
const mongoose = require('mongoose')


exports.createProduct = function(req,res){
    let product = new Product({})
        product._id = new mongoose.Types.ObjectId(),
        product.name = req.name,
        product.alcoholP = req.alcoholP,
        product.price = req.price,
        product.desciption = req.desciption

    product.save((err)=>{
        if(err){return handleError(err)}
    });
 }

 exports.deleteProduct = function(id){
    Product.findByIdAndDelete(id).exec((err) => {
        if(err) return handleError(err)
        console.log(`Produktet med ${id}, er blevet slettet`)
    })
 }

 exports.editProduct = function(id){

 }

exports.getProduct = function(productID){
    return Product.findOne({_id: productID}).exec()
}

exports.getProdukt = async function() {
    return await Product.find({}).exec();
  };
