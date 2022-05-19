const express = require('express')
const app = express()


app.on('mount', () => { console.log('administrative instance mounted') })



//importing routes 
const new_Shorp = require('./routes/administrative_routes/new_Business')
const new_Product = require('./routes/administrative_routes/new_product')

//middleware

app.use('/setup', new_Shorp)
app.use('/newProduct', new_Product)





module.exports = app;