const express = require('express')
const router = express.Router();

router.post('/login', (req, res) =>{
let user=req.body.username
let password=req.body.password
if(user=="q"&&password=="123"){
    res.redirect('admin')
}else{
    res.send("ingen adgang")
}
})

router.get('/login', (req, res) => {
    res.render('login')
})

module.exports = router;
