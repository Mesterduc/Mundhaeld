const express = require('express')
const router = express.Router();

// render forside.pug
router.get('/', (req, res) => {
    res.render('forside')
})

// render forside.pug på adressen /forside
router.get('/forside', (req, res) => {
    res.render('forside')
})

module.exports = router;
