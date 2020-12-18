const express = require('express')
const adminController = require('../controllers/admin')

const admin = express.Router()

admin.get('/add-product', adminController.getAddProduct)
admin.post('/add-product', adminController.postAddProduct)
// admin.get('/edit-product/:id', adminController.getEditProduct)
// admin.post('/edit-product/:id', adminController.postEditProduct)
admin.get('/product-list', adminController.getProducts)

module.exports = admin
