const express = require('express')
const router = express.Router();
const controller = require('../controllers/product')

// render admin.pug
router.get('/admin', (req, res) => {
    res.render('admin')
})

// Render adminRedigere.pug med det valgte produkts informationer
router.post('/adminRedigere/:id', (req, res) => {
    const id = req.params.id
    const product = controller.getProduct(id)
    product.then(productToEdit => {
        res.render('adminRedigere', {
            _id: productToEdit._id,
            name: productToEdit.name, 
            alcoholP: productToEdit.alcoholP, 
            price: productToEdit.price, 
            desciption: productToEdit.desciption})
    })
    .catch(function(err){
        return err
    })
})

// kalder controllerens editProdukt funktion
// opdaterer produktet og redirecter til 'admin/sortiment'
router.post('/admin/edit/:id', (req, res)=> {
    controller.editProduct(req)
    res.redirect('/admin/sortiment')
})

// Kalder controllerens createProduct funktion
// Opretter et produkt og redirecter til 'sortiment'
router.post('/admin', (req, res) => {
    controller.createProduct(req.body)
    res.redirect('sortiment')
})

// Kalder controllerens deleteProduct funktion
// Sletter det valgte produkt og redirecter til /admin/sortiment/
router.post('/admin/:id', (req, res)=>{
    let id = req.params.id
    controller.deleteProduct(id)
    res.redirect('/admin/sortiment')
})


module.exports = router;
