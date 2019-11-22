const express = require('express')
const router = express.Router();
const controller = require('../controllers/product')

router.get('/sortiment', (req, res) => {
    // let products = controller.getProducts()
    // products.then((data)=>{
    //     res.json(data)
    // })
    // .then(data=>{
    //     res.render('sortiment', {products: data})
    // })
    let products = controller.getProducts()
    res.render('sortiment')
})

router.get('/sortiment/:id', (req,res)=>{
    const product = controller.getProduct(req.params.id)
    res.render('sortiment', {product: product})
})

module.exports = router;