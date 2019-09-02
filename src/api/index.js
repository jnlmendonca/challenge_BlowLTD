const express = require('express')

// Define v1 api
const v1 = express.Router()
v1.get('/payments', function (req, res, next) {
    res.send('ok')
})

// Define general api
const api = express.Router()
api.use('/v1', v1)

module.exports = api