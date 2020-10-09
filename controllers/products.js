const Product = require('../models/Product')

exports.getAddProduct = (req, res) => {
  const context = {
    title: 'Add Product'
  }
  res.render('add-product', { ...context })
}

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title)
  product.save()
  res.redirect('/')
}

exports.getProducts = (req, res) => {
  const products = Product.fetchAll()
  const context = {
    title: 'All Products',
    products: products
  }
  res.render('shop', { ...context })
}
