const fs = require('fs')
const path = require('path')
const root = require('../utils/path')

const p = path.join(root, 'data', 'products.json')

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([])
    } else {
      cb(JSON.parse(fileContent))
    }
  })
}

module.exports = class Product {
  constructor (title, imageUrl, price, description) {
    this.id = Math.random().toString()
    this.title = title
    this.imageUrl = imageUrl
    this.price = price
    this.description = description
  }

  save () {
    getProductsFromFile(products => {
      products.push(this)
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err)
      })
    })
  }

  static findById (id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id)
      console.log('')
      console.log(product)
      console.log('')
      cb(product)
    })
  }

  static fetchAll (cb) {
    getProductsFromFile(cb)
  }
}
