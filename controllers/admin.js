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

exports.getEditProduct = (req, res) => {
  const productId = req.params.productId
  Product.findById(productId, product => {
    if (!product) {
      return res.redirect('/')
    }
    res.render('admin/edit-product', {
      title: 'Edit Product',
      product
    })
  })
}

exports.postEditProduct = (req, res) => {
  const { productId, title, imageUrl, price, description } = req.body
  const product = new Product(
    title,
    imageUrl,
    price,
    description,
    productId
  )
  product.save()
  res.redirect('/admin/products')
}

exports.postDeleteProduct = (req, res) => {
  const productId = req.body.productId
  Product.deleteById(productId)
  res.redirect('/admin/products')
}

exports.getProducts = (req, res) => {
  Product.fetchAll(products => {
    res.render('admin/product-list', {
      title: 'Admin Products',
      products: products
    })
  })
}
