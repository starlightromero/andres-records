const Product = require('../models/Product')

exports.getAddProduct = (req, res) => {
  res.render('admin/add-product', {
    title: 'Add Product'
  })
}

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title)
  product.save()
  res.redirect('/')
}

exports.getProducts = (req, res) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      title: 'Admin Products',
      products: products
    })
  })
}
