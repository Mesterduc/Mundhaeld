let mongoose = require('mongoose')
let Schema = mongoose.Schema

let productSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    alcoholP: Number,
    price: Number,
    desciption: String
})

module.exports = mongoose.model('Product', productSchema)