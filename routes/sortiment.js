const express = require("express");
const router = express.Router();
const controller = require('../controllers/product')

// Henter alle produkter og render sortiment
router.get('/sortiment', (req, res) => {
    if (req.session.authenticated === true) {
        res.redirect("./adminsortiment")
    } else{
        let product = controller.getProducts().then(data => {
            return res.render("sortiment", {product: data});
        })

    }

});

// Henter alle produkter og render sortimentAdmin
router.get('/adminsortiment', (req, res) => {
  let product = controller.getProducts().then(data => {
      return res.render("sortimentAdmin", {product: data});
  })
}); 

module.exports = router;