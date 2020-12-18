const express = require('express')
const adminController = require('../controllers/admin')

const admin = express.Router()

admin.get('/add-product', adminController.getAddProduct)
admin.post('/add-product', adminController.postAddProduct)
admin.get('/edit-product/:productId', adminController.getEditProduct)
admin.post('/edit-product', adminController.postEditProduct)
admin.post('/delete-product', adminController.postDeleteProduct)
admin.get('/products', adminController.getProducts)

module.exports = admin
