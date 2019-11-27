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

router.delete('/admin/:id', (req, res)=>{
    controller.deleteProduct(req)
    res.redirect('sortiment')
})
  

module.exports = router;
