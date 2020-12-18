const express = require('express')
const shopController = require('../controllers/shop')

const shop = express.Router()

shop.get('/', shopController.getIndex)
shop.get('/products', shopController.getProducts)
shop.get('/products/:productId', shopController.getProduct)
shop.get('/cart', shopController.getCart)
shop.post('/cart', shopController.postCart)
shop.post('/cart/delete-product', shopController.postCartDeleteProduct)
shop.get('/orders', shopController.getOrders)
shop.get('/checkout', shopController.getCheckout)

module.exports = shop
