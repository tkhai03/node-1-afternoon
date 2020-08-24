const express = require('express')
const getProduct = require('.getProduct')
const getProducts = require('./getProducts')

const app = express()

const port = 4000

//app.use(express.json())

app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})