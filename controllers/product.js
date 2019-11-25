const Product = require('../models/product')

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
exports.getCompanies = function() {
    Product.find({name: "hej"}, function(err, arr) {
        console.log("fuck")
    });
  };

exports.getProdukt = async function() {
    return await Product.find({}).exec();
  };
