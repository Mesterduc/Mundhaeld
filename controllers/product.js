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
    // let id = req.params._id;
    // let id = "5ddd2ed97dddd90d6c147379";

    Product.findByIdAndDelete(id).exec((err) => {
        if(err) return handleError(err)
        console.log(`Produkt med ${id}, er blevet slettet`)
    })
 }

exports.getProduct = function(productID){
    return Product.findOne({name: productID}).exec((err)=>{
        if(err) return handleError(err)
    })
}

exports.getProdukt = async function() {
    return await Product.find({}).exec();
  };
