let mongoose = require('mongoose')

let Schema = mongoose.Schema

let productSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    alcoholP: Number,
    price: Number,
    desciption: String
})

let Product= mongoose.model('Product', productSchema)

let beer1 = new Product({
    _id: Schema.Types.ObjectId,
    name: 'Klosterbryg',
    alcoholP: 4.5,
    price: 45,
    desciption: 'Teste-far'
})

beer1.save();