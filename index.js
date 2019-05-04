require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')
const cors = require('cors')
const https = require('https')
const http = require('http')
const fetch = require('node-fetch')
// const mongoose = require('mongoose');
const adminController = require('./controllers/admin_controller');
const cloudinaryController = require('./controllers/cloudinary_controller');
const userController = require('./controllers/user_controller');
const productsController = require('./controllers/products_controller');

const app = express()

// mongoose.connect(process.env.CONNECTION_STRING,
//     { useNewUrlParser: true },
//     (err) => {
//     if(err) {
//         console.log('Database Error----------------', err);
//     }
//     console.log('Connected to database');
// });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(cookieParser())
app.use(session(
  {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 14 * 24 * 60 * 60 * 1000 }
  }
))

// setTimeout(() => {
//     //Cloudinary endpoint will get the credentials from cloudinary_controller which will be signed.
//     app.get('/api/upload', cloudinaryController.upload);
//
//     //Login / Logout
//     app.get('/auth/callback', userController.login)
//     app.post('/api/logout', userController.logout);
//
//     //Read the user's session.
//     app.get('/api/user-data', userController.readUserData);
//
//     //Admin
//     app.get('/api/users', adminController.getAdminUsers);
//
//     //Cart
//     app.post('/api/user-data/cart', userController.addToCart);
//     app.delete('/api/user-data/cart/:id', userController.removeFromCart);
//
//     //Products
//     app.get('/api/products', productsController.readAllProducts);
//     app.get('/api/products/:id', productsController.readProduct);
//     app.post('/api/products', adminController.createProduct);
//     app.put('/api/products/:id', adminController.updateProduct);
//     app.delete('/api/products/:id', adminController.deleteProduct);
// }, 200);

const port = process.env.PORT || 3001
app.listen(port)

console.log(`krakenwhip listening on ${port}`)
