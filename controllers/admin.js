const Product = require('../models/Product')

exports.getAddProduct = (req, res) => {
  res.render('admin/add-product', {
    title: 'Add Product'
  })
}

exports.postAddProduct = (req, res) => {
  const { title, imageUrl, price, description } = req.body
  const product = new Product(
    title,
    imageUrl,
    price,
    description
  )
  product.save()
  res.redirect('/')
}

exports.getProducts = (req, res) => {
  Product.fetchAll(products => {
    res.render('admin/product-list', {
      title: 'Admin Products',
      products: products
    })
  })
}
