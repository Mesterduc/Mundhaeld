const express = require('express')
const router = express.Router();

router.get('/booking', (req, res) => {
    res.render('booking', {tid : tidspunkter})
})

module.exports = router;


//Tidsvælger
const tidspunkter = ['12-14', '14-16','16-18','18-20','20-22','22-00','00-02']
