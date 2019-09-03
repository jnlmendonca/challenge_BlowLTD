const models = require('../../data')
const errors = require('../../config/errors')


function listPayments (req, res, next) {

    let offset = parseInt(req.query.offset) || 0
    let limit = parseInt(req.query.limit) || 10

    if (offset < 0) {
        offset = 0
    }

    if (limit < 0) {
        limit = 0
    }

    if (limit > 50) {
        limit = 50
    }

    models.Payment.find({}, {createdAt: 0, updatedAt: 0, __v: 0}, {skip: offset, limit: limit, sort: {createdAt: 1}}, (err, payments) => {
        return res.status(200).json(payments)
    })
}


function retrievePayment (req, res, next) {

    // Validate payment id
    const idFormat = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/

    if (!req.params.id || !idFormat.test(req.params.id)) {
        return res.status(400).send(errors.InvalidIdError)
    }

    models.Payment.findOne({_id: req.params.id}, {createdAt: 0, updatedAt: 0, __v: 0}, (err, payment) => {
        if (err || !payment) {
            return res.status(404).send()
        }

        return res.status(200).json(payment)
    })
}


function createPayment (req, res, next) {

    models.Payment.create(req.body, (err, payment) => {
        if (err || !payment) {
            return res.status(400).json(errors.InvalidDataError)
        }

        return res.status(201).json(payment)
    })
}


function deletePayment (req, res, next) {

    // Validate payment id
    const idFormat = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/

    if (!req.params.id || !idFormat.test(req.params.id)) {
        return res.status(400).send(errors.InvalidIdError)
    }

    models.Payment.findOneAndRemove({_id: req.params.id}, {useFindAndModify: false}, (err, payment) => {
        if (err || !payment) {
            return res.status(404).send()
        }

        return res.status(204).send()
    })
}


function updatePayment (req, res, next) {

    // Validate payment id
    const idFormat = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/

    if (!req.params.id || !idFormat.test(req.params.id)) {
        return res.status(400).send(errors.InvalidIdError)
    }

    models.Payment.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, useFindAndModify: false, fields: {createdAt: 0, updatedAt: 0, __v: 0}}, (err, payment) => {
        if (err) {
            return res.status(400).json(errors.InvalidDataError)
        }

        if (!payment) {
            return res.status(404).send()
        }

        return res.status(200).json(payment)
    })
}

module.exports = {
    listPayments,
    retrievePayment,
    createPayment,
    deletePayment,
    updatePayment
}
