const express = require('express')
const router = express.Router();
const controller = require('../controllers/product')


router.get('/admin', (req, res) => {
    res.render('admin')
})

router.post('/admin', (req,res)=>{
    controller.createProduct(req.body)
    res.redirect('sortiment')
})

router.post('/admin/:id', (req, res)=>{
    let id = req.params.id
    controller.deleteProduct(id)
    res.redirect('/admin/sortiment')
})
  

module.exports = router;
