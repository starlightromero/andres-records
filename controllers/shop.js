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
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = []
      for (const product of products) {
        const cartProductData = cart.products.find(prod => prod.id === product.id)
        if (cartProductData) {
          cartProducts.push({ product: product, qty: cartProductData.qty })
        }
      }
      res.render('shop/cart', {
        products: cartProducts
      })
    })
  })
}

exports.postCart = (req, res) => {
  const productId = req.body.productId
  Product.findById(productId, product => {
    Cart.addProduct(productId, product.price)
  })
  res.redirect('/cart')
}

exports.postCartDeleteProduct = (req, res) => {
  const productId = req.body.productId
  Product.findById(productId, product => {
    Cart.deleteProduct(productId, product.price)
    res.redirect('/cart')
  })
}

exports.getOrders = (req, res) => {
  res.render('shop/orders')
}

exports.getCheckout = (req, res) => {
  res.render('shop/checkout')
}
