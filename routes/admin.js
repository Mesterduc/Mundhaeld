const express = require('express')
const router = express.Router();
const controller = require('../controllers/product')


router.get('/admin', (req, res) => {
    res.render('admin')
})
router.get('/adminredigere', (req, res) => {
    res.render('adminRedigere')
})

router.post('/admin', (req, res) => {
    controller.createProduct(req.body)
    res.redirect('sortiment')
})

router.post('/admin/:id', (req, res) => {
    console.log("her")
    let id = req.params.id
    console.log(id)
    controller.deleteProduct(id)
    // res.send("deleted")
    console.log("her2")
    res.redirect('/admin/sortiment')
    console.log("her3")
})


module.exports = router;
