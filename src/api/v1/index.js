const express = require('express')
const payments = require('./payments')

// Define v1 api
const v1 = express.Router()
v1.get('/payments', payments.listPayments)
v1.get('/payments/:id', payments.retrievePayment)
v1.post('/payments', payments.createPayment)
v1.delete('/payments/:id', payments.deletePayment)

module.exports = v1