const Product = require('../models/product')
const Schema = require('mongoose').Schema
const mongoose = require('mongoose')

// opretter et produkt, som kaster en error hvis nødvendigt
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
 // TEST METODE
 /*exports.createProduct = function(name, alkoP, pris, description) {
    let product = new Product({})
        product._id = new mongoose.Types.ObjectId(),
        product.name = name,
        product.alcoholP = alkoP,
        product.price = pris,
        product.desciption = description

    product.save((err)=>{
        if(err){return handleError(err)}
    });
 }*/

 // sletter et produkt, som kaster en error hvis produktet ikke kan findes i mongodb
 exports.deleteProduct = function(id){
    Product.findByIdAndDelete(id).exec((err) => {
        if(err) return handleError(err)})
 }

 // updaterer et produkt. Der "oprettes" et tomt objekt, som indeholder de nye data
 // derefter tildeles de til det produkt som skal opdateres, ved hjælp af mongoose' updateOne()
 exports.editProduct = function(req, res){
    let tempProduct = {};
    tempProduct.name = req.body.name;
    tempProduct.alcoholP = req.body.alcoholP;
    tempProduct.price = req.body.price;
    tempProduct.desciption = req.body.desciption;

    let oldProduct = {_id: req.params.id}

    Product.updateOne(oldProduct, tempProduct, function(err){
        if(err){
            return handleError(err)
        }
    })
 }
// TEST METODE
/*exports.editProduct = function(id, name, alkoP, pris, description){
    let tempProduct = {};
    tempProduct.name = name;
    tempProduct.alcoholP = alkoP;
    tempProduct.price = pris;
    tempProduct.desciption = description;

    let oldProduct = {_id: id};

    Product.updateOne(oldProduct, tempProduct, function(){
    })
 }*/

 // Finder ét produkt ud fra produkt ID
exports.getProduct = function(productID){
    return Product.findOne({_id: productID}).exec()
    .catch(function(err){
        return handleError(err)
    })
}

// Henter alle produkter i mongodb
exports.getProducts = async function() {
    return await Product.find({}).exec()
    .catch(function(err){
        return handleError(err)
    });
}
