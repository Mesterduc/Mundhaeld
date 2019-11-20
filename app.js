const express = require('express')
const app = express()
app.set('view engine', 'pug')
const pug = require('pug')

//mongodb opsætning
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://dbNissen:<password>@mundhaeld-nshjk.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
  autoIndex: false,
  useUnifiedTopology: true
});

// Routes
const bookingRouter = require('./routes/booking.js')
app.use('', bookingRouter)

const sortimentRouter = require('./routes/sortiment.js')
app.use('', sortimentRouter)

const forsideRouter = require('./routes/forside')
app.use('', forsideRouter)
app.use(express.static('public'))

app.listen(8000)
console.log('Lytter på port 8000')