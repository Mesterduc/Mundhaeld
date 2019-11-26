const Product = require('../models/product')
const Schema = require('mongoose').Schema
const mongoose = require('mongoose')

exports.createProduct = function(){
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: document.getElementById('name'),
        alcoholP: document.getElementById('alcoholP'),
        price: document.getElementById('price'),
        desciption: document.getElementById('desciption')
    })
    console.log('gemt')
    return product.save()
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
