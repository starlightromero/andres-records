const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const root = require('./utils/path')

const errorsController = require('./controllers/errors')

const app = express()

app.set('view engine', 'pug')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(root, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorsController.get404)

app.listen(3000)
