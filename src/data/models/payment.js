const mongoose = require('mongoose')
const uuidv4 = require('uuid/v4')
const paymentAttributesSchema = require('./paymentAttributes').schema

// Define schema
const paymentSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4,
        match: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
    },
    version: {
        type: Number,
        required: true,
        min: 0
    },
    organisation_id: {
        type: String,
        required: true
    },
    attributes: {
        type: paymentAttributesSchema
    }
}, {
    timestamps: true
})

// Define model
const Payment = mongoose.model('Payment', paymentSchema)

module.exports = {
    model: Payment,
    schema: paymentSchema
}
