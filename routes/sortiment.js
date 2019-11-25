const express = require("express");
const router = express.Router();
const controller = require('../controllers/product')

router.get('/sortiment', (req, res) => {
    let product = controller.getProdukt().then(data => {
        return res.render("sortiment", {product: data});
    })
  }); 

module.exports = router;