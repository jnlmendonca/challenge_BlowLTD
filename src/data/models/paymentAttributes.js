const mongoose = require('mongoose')

// Define schema
const paymentAttributesSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    currency: {
        type: String,
        required: true,
        enum: ['GBP', 'EUR', 'USD']
    },
    beneficiary_party_id: {
        type: String,
        required: true,
        match: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
    },
    debtor_party_id: {
        type: String,
        required: true,
        match: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
    },
    sponsor_party_id: {
        type: String,
        required: true,
        match: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
    },
    payment_scheme_type: {
        type: String,
        required: true,
        enum: ['FPS']
    },
    payment_type: {
        type: String,
        required: true,
        enum: ['Credit']
    },
    scheme_payment_type: {
        type: String,
        required: true,
        enum: ['ImmediatePayment']
    },
    scheme_payment_sub_type: {
        type: String,
        required: true,
        enum: ['InternetBanking']
    },
    reference: {
        type: String,
        required: false,
    },
    payment_purpose: {
        type: String,
        required: false,
    },
    end_to_end_reference: {
        type: String,
        required: false,
    },
    processing_timestamp: {
        type: Date,
        default: Date.now
    },
    numeric_reference: {
        type: String,
        required: true,
        match: '^[0-9]+$'
    },
    payment_id: {
        type: String,
        required: true,
        match: '^[0-9]+$'
    }
})

// Define Model
const PaymentAttributes = mongoose.model('PaymentAttributes', paymentAttributesSchema)

module.exports = {
    model: PaymentAttributes,
    schema: paymentAttributesSchema
}
