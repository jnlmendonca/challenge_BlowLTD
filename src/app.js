const express = require('express')
const bodyParser = require('body-parser')
const models = require('./data')
const api = require('./api')

// App
const app = express()

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to the payments server. Use the API endpoints to interact with the payment records.\n')
})
app.use('/api', api)

module.exports = {
	default: app,
	models: models
}
