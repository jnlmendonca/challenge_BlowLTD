const express = require('express')
const models = require('./data')
const api = require('./api')

// App
const app = express()
app.get('/', (req, res) => {
  res.send('Hello world\n')
})
app.use('/api', api)

module.exports = {
	default: app,
	models: models
}
