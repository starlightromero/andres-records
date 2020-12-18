const Product = require('../models/Product')
const Cart = require('../models/Cart')

exports.getIndex = (req, res) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      title: 'All Products',
      products: products
    })
  })
}

exports.getProducts = (req, res) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      title: 'All Products',
      products: products
    })
  })
}

exports.getProduct = (req, res) => {
  const productId = req.params.productId
  Product.findById(productId, product => {
    res.render('shop/product-detail', { product: product })
  })
}

exports.getCart = (req, res) => {
  res.render('shop/cart')
}

exports.postCart = (req, res) => {
  const productId = req.body.productId
  Product.findById(productId, product => {
    Cart.addProduct(productId, product.price)
  })
  res.redirect('/cart')
}

exports.getOrders = (req, res) => {
  res.render('shop/orders')
}

exports.getCheckout = (req, res) => {
  res.render('shop/checkout')
}
