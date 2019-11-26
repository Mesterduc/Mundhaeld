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

exports.getProducts = function(){
    return Product.find().exec((err, products)=>{
        if(err) return handleError(err)
        console.log(products)
    })
}

exports.getProduct = function(productID){
    return Product.findOne({name: productID}).exec((err)=>{
        if(err) return handleError(err)
    })
}
exports.getCompanies = function() {
    Product.find({name: "hej"}, function(err, arr) {
        console.log("fuck")
    });
  };

exports.getProdukt = async function() {
    return await Product.find({}).exec();
  };
