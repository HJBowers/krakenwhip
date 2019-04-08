const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')
const cors = require('cors')
const https = require('https')
const http = require('http')
const fetch = require('node-fetch')
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(cookieParser())
app.use(session(
  {
    secret: 'nom nom nom',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1 * 24 * 60 * 60 * 1000 }
  }
))

app.get('/', function(req, res, next){
    res.sendStatus(200);
});

const port = process.env.PORT || 3000
app.listen(port)

console.log(`krakenwhip listening on ${port}`)
