const express = require('express')
const app = express()
app.set('view engine', 'pug')
const pug = require('pug')

/*
app.get('forside', (req, res) => {
    res.render('/forside')
})
*/

const forsideRouter = require('./routes/forside')
app.use('', forsideRouter)
app.use(express.static('public'))

app.listen(8000)
console.log('Lytter på port 8000')