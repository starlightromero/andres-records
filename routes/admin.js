const express = require('express')
const productsController = require('../controllers/products')

const admin = express.Router()

admin.get('/add-product', productsController.getAddProduct)
admin.post('/add-product', productsController.postAddProduct)

module.exports = admin
