const express = require('express')
const app = express()
const pug = require('pug')
app.set('view engine', 'pug')
app.use(express.json())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//mongodb opsætning
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://dbNissen:bajer123@mundhaeld-nshjk.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
  autoIndex: false,
  useUnifiedTopology: true
}).catch(error => handleError(error));

// Routes
const adminRouter = require('./routes/admin.js')
app.use('', adminRouter)

const bookingRouter = require('./routes/booking.js')
app.use('', bookingRouter)

const sortimentRouter = require('./routes/sortiment.js')
app.use('', sortimentRouter)

const forsideRouter = require('./routes/forside')
app.use('', forsideRouter)
app.use(express.static('public'))

app.listen(8000)
console.log('Lytter på port 8000')