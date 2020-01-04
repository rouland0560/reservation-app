const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDB = require('./fake_db')

const productRoutes = require('./routes/products')


mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
    () => {
        const fakeDB = new FakeDB()
        fakeDB.initDB()
    }
);

const app = express()
app.use('/api/v1/products', productRoutes)


const PORT = process.env.PORT || '3001'

app.listen('3001', function(){
    console.log('I am running !')
})

// mongodb+srv://test:<password>@cluster0-lxhoo.mongodb.net/test?retryWrites=true&w=majority