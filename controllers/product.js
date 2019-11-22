const Product = require('../models/product')
const Schema = require('mongoose').Schema

exports.createProduct = function(){

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