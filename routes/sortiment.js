const express = require('express')
const router = express.Router();

router.get('/sortiment', (req, res) => {
    res.render('sortiment')
})

module.exports = router;