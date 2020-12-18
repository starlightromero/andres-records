const Product = require('../models/Product')

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

exports.getCart = (req, res) => {
  res.render('shop/cart')
}

exports.getCheckout = (req, res) => {
  res.render('shop/checkout')
}
