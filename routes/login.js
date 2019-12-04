const express = require('express')
const router = express.Router();

router.post('/login', (req, res) =>{
if (req.body.username && req.body.username === 'user' && req.body.password && req.body.password === 'pass') {
    req.session.authenticated = true;
    res.redirect('/admin');
} else {
    console.log('fejl')
    res.redirect('/login');
}

})

router.get('/login', (req, res) => {
    res.render('login')
})

module.exports = router;
