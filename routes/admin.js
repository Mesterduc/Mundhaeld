const express = require('express')
const router = express.Router();
const controller = require('../controllers/product')


router.get('/admin', (req, res) => {
    res.render('admin')
})
router.get('/adminRedigere/:id', (req, res) => {
    const id = req.params.id
    const product = controller.getProduct(id)
    console.log(id)
    res.render('adminRedigere', {Product: product})
    // res.render('adminRedigere', {name: product.name, alcoholP: product.alcoholP, price: product.price, desciption: product.desciption})
    // res.render('adminRedigere', {product: product})

})

router.put('/admin/edit/:id', (req, res)=> {

})

router.post('/admin', (req, res) => {
    controller.createProduct(req.body)
    res.redirect('sortiment')
})

router.post('/admin/:id', (req, res)=>{
    let id = req.params.id
    controller.deleteProduct(id)
    res.redirect('/admin/sortiment')
})


module.exports = router;
