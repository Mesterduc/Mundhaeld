let mongoose = require('mongoose')
let Schema = mongoose.Schema

// Bygger et produkt Schema
let productSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    alcoholP: Number,
    price: String,
    desciption: String
})

module.exports = mongoose.model('Product', productSchema)