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

 exports.editProduct = function(req, res){
    let tempProduct = {};
    tempProduct.name = req.body.name;
    tempProduct.alcoholP = req.body.alcoholP;
    tempProduct.price = req.body.price;
    tempProduct.desciption = req.body.desciption;

    let oldProduct = {_id: req.params.id}

    Product.updateOne(oldProduct, tempProduct, function(err){
        if(err){
            console.log(err)
            return;
        }
    })
 }

exports.getProduct = function(productID){
    return Product.findOne({_id: productID}).exec()
}

exports.getProducts = async function() {
    return await Product.find({}).exec();
}
