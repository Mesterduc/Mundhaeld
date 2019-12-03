const express = require("express");
const router = express.Router();
const controller = require('../controllers/product')

router.get('/sortiment', (req, res) => {
    let product = controller.getProducts().then(data => {
        return res.render("sortiment", {product: data});
    })
});
router.get('/admin/sortiment', (req, res) => {
  let product = controller.getProducts().then(data => {
      return res.render("sortimentAdmin", {product: data});
  })
}); 

module.exports = router;