const request = require("supertest")
const expect = require("chai").expect
const uuidv4 = require('uuid/v4')
const app = require("../app").default
const models = require("../app").models
const errors = require("../config/errors")

describe("api/v1", () => {

    // Clean DB before each test
    beforeEach(async () => {
        await models.PaymentAttributes.deleteMany({})
        await models.Payment.deleteMany({})
    })

    // GET api/v1/payment/
    describe("GET /payments/", () => {
        it("should return a list of payments if they exist", async () => {

            // Populate DB for test
            const payments = [
                { version: 1, organisation_id: '000000' },
                { version: 1, organisation_id: '000001' },
                { version: 1, organisation_id: '000002' }
            ]
            await models.Payment.create(payments)

            // Make request
            const response = await request(app).get("/api/v1/payments")

            // Evaluate response
            expect(response.status).to.equal(200)
            expect(response.body.length).to.equal(3)
        })

        it("should return an empty list if payments are not registered", async () => {

            // Make request
            const response = await request(app).get("/api/v1/payments")

            // Evaluate response
            expect(response.status).to.equal(200)
            expect(response.body.length).to.equal(0)
        })

        it("should return 10 records by default", async () => {

            // Populate DB for test - 15 payment records
            const payments = [
                { version: 1, organisation_id: '000000' },
                { version: 1, organisation_id: '000001' },
                { version: 1, organisation_id: '000002' },
                { version: 1, organisation_id: '000003' },
                { version: 1, organisation_id: '000004' },
                { version: 1, organisation_id: '000005' },
                { version: 1, organisation_id: '000006' },
                { version: 1, organisation_id: '000007' },
                { version: 1, organisation_id: '000008' },
                { version: 1, organisation_id: '000009' },
                { version: 1, organisation_id: '000010' },
                { version: 1, organisation_id: '000011' },
                { version: 1, organisation_id: '000012' },
                { version: 1, organisation_id: '000013' },
                { version: 1, organisation_id: '000014' }
            ]
            await models.Payment.create(payments)

            // Make request
            const response = await request(app).get("/api/v1/payments")

            // Evaluate response
            expect(response.status).to.equal(200)
            expect(response.body.length).to.equal(10)
        })
    })

    // GET api/v1/payment/ with low limit
    describe("GET /payments/?limit=5", () => {
        it("should return less records if requested", async () => {

            // Populate DB for test - 10 payment records
            const payments = [
                { version: 1, organisation_id: '000000' },
                { version: 1, organisation_id: '000001' },
                { version: 1, organisation_id: '000002' },
                { version: 1, organisation_id: '000003' },
                { version: 1, organisation_id: '000004' },
                { version: 1, organisation_id: '000005' },
                { version: 1, organisation_id: '000006' },
                { version: 1, organisation_id: '000007' },
                { version: 1, organisation_id: '000008' },
                { version: 1, organisation_id: '000009' }
            ]
            await models.Payment.create(payments)

            // Make request
            const response = await request(app).get("/api/v1/payments/?limit=5")

            // Evaluate response
            expect(response.status).to.equal(200)
            expect(response.body.length).to.equal(5)
        })
    })

    // GET api/v1/payment/ with high limit
    describe("GET /payments/?limit=60", () => {
        it("should return a maximum of 50 records", async () => {

            // Populate DB for test - 60 payment records
            const payments = [
                { version: 1, organisation_id: '000000' },
                { version: 1, organisation_id: '000001' },
                { version: 1, organisation_id: '000002' },
                { version: 1, organisation_id: '000003' },
                { version: 1, organisation_id: '000004' },
                { version: 1, organisation_id: '000005' },
                { version: 1, organisation_id: '000006' },
                { version: 1, organisation_id: '000007' },
                { version: 1, organisation_id: '000008' },
                { version: 1, organisation_id: '000009' },
                { version: 1, organisation_id: '000010' },
                { version: 1, organisation_id: '000011' },
                { version: 1, organisation_id: '000012' },
                { version: 1, organisation_id: '000013' },
                { version: 1, organisation_id: '000014' },
                { version: 1, organisation_id: '000015' },
                { version: 1, organisation_id: '000016' },
                { version: 1, organisation_id: '000017' },
                { version: 1, organisation_id: '000018' },
                { version: 1, organisation_id: '000019' },
                { version: 1, organisation_id: '000020' },
                { version: 1, organisation_id: '000021' },
                { version: 1, organisation_id: '000022' },
                { version: 1, organisation_id: '000023' },
                { version: 1, organisation_id: '000024' },
                { version: 1, organisation_id: '000025' },
                { version: 1, organisation_id: '000026' },
                { version: 1, organisation_id: '000027' },
                { version: 1, organisation_id: '000028' },
                { version: 1, organisation_id: '000029' },
                { version: 1, organisation_id: '000030' },
                { version: 1, organisation_id: '000031' },
                { version: 1, organisation_id: '000032' },
                { version: 1, organisation_id: '000033' },
                { version: 1, organisation_id: '000034' },
                { version: 1, organisation_id: '000035' },
                { version: 1, organisation_id: '000036' },
                { version: 1, organisation_id: '000037' },
                { version: 1, organisation_id: '000038' },
                { version: 1, organisation_id: '000039' },
                { version: 1, organisation_id: '000040' },
                { version: 1, organisation_id: '000041' },
                { version: 1, organisation_id: '000042' },
                { version: 1, organisation_id: '000043' },
                { version: 1, organisation_id: '000044' },
                { version: 1, organisation_id: '000045' },
                { version: 1, organisation_id: '000046' },
                { version: 1, organisation_id: '000047' },
                { version: 1, organisation_id: '000048' },
                { version: 1, organisation_id: '000049' },
                { version: 1, organisation_id: '000050' },
                { version: 1, organisation_id: '000051' },
                { version: 1, organisation_id: '000052' },
                { version: 1, organisation_id: '000053' },
                { version: 1, organisation_id: '000054' },
                { version: 1, organisation_id: '000055' },
                { version: 1, organisation_id: '000056' },
                { version: 1, organisation_id: '000057' },
                { version: 1, organisation_id: '000058' },
                { version: 1, organisation_id: '000059' }
            ]
            await models.Payment.create(payments)

            // Make request
            const response = await request(app).get("/api/v1/payments/?limit=60")

            // Evaluate response
            expect(response.status).to.equal(200)
            expect(response.body.length).to.equal(50)
        })
    })

    // GET api/v1/payment/ with offset
    describe("GET /payments/?offset=10", () => {
        it("should skip the first 10 records", async () => {

            // Populate DB for test - 10 payment records
            const payments = [
                { version: 1, organisation_id: '000000' },
                { version: 1, organisation_id: '000001' },
                { version: 1, organisation_id: '000002' },
                { version: 1, organisation_id: '000003' },
                { version: 1, organisation_id: '000004' },
                { version: 1, organisation_id: '000005' },
                { version: 1, organisation_id: '000006' },
                { version: 1, organisation_id: '000007' },
                { version: 1, organisation_id: '000008' },
                { version: 1, organisation_id: '000009' }
            ]
            await models.Payment.create(payments)

            // Populate DB for test - 10 extra payment records
            // This will allow the separation by creation date
            const extra_payments = [
                { version: 1, organisation_id: '000010' },
                { version: 1, organisation_id: '000011' },
                { version: 1, organisation_id: '000012' },
                { version: 1, organisation_id: '000013' },
                { version: 1, organisation_id: '000014' },
                { version: 1, organisation_id: '000015' },
                { version: 1, organisation_id: '000016' },
                { version: 1, organisation_id: '000017' },
                { version: 1, organisation_id: '000018' },
                { version: 1, organisation_id: '000019' }
            ]
            await models.Payment.create(extra_payments)

            // Make request
            const response = await request(app).get("/api/v1/payments/?offset=10")

            // Evaluate response
            expect(response.status).to.equal(200)
            expect(response.body.length).to.equal(10)

            const organisationIds = response.body.map(record => {
                return parseInt(record.organisation_id)
            })
            expect(Math.min(...organisationIds)).to.equal(10)
            expect(Math.max(...organisationIds)).to.equal(19)
        })
    })

    // GET api/v1/payment/ with ID
    describe("GET /payments/:id", () => {
        it("should return a payment record for a valid ID", async () => {

            // Populate DB for test - 20 payment records
            const payment = new models.Payment({ version: 1, organisation_id: '000000' })
            await payment.save()

            // Make request
            const response = await request(app).get("/api/v1/payments/" + payment._id)

            // Evaluate response
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('organisation_id', '000000')
            expect(response.body).to.have.property('version', 1)
            expect(response.body).to.have.property('_id', payment._id)
        })

        it("should return a 404 error for an non-existent ID", async () => {

            // Populate DB for test - 20 payment records
            const payment = new models.Payment({ version: 1, organisation_id: '000000' })
            await payment.save()

            // Make request
            const response = await request(app).get("/api/v1/payments/" + uuidv4())

            // Evaluate response
            expect(response.status).to.equal(404)
        })

        it("should return a 400 error for an invalid ID", async () => {

            // Populate DB for test - 20 payment records
            const payment = new models.Payment({ version: 1, organisation_id: '000000' })
            await payment.save()

            // Make request
            const response = await request(app).get("/api/v1/payments/00000000-0000-5000-0000-000000000000 ")

            // Evaluate response
            expect(response.status).to.equal(400)
            expect(response.body).to.deep.equal(errors.InvalidIdError)
        })
    })

    // POST api/v1/payment/
    describe("POST /payments/", () => {
        it("should return payment when input is valid", async () => {

            // Define request data
            let payment_data = {
                version: 1,
                organisation_id: '000000'
            }

            // Make request
            const response = await request(app).post("/api/v1/payments/").send(payment_data)

            // Evaluate response
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('organisation_id', '000000')
            expect(response.body).to.have.property('version', 1)
            expect(response.body).to.have.property('_id')

            // Evaluate effect on DB
            models.Payment.find({}, (err, payments) => {
                expect(err).to.be.null
                expect(payments.length).to.equal(1)
                expect(payments[0].version).to.equal(payment_data.version)
                expect(payments[0].organisation_id).to.equal(payment_data.organisation_id)
                expect(payments[0]._id).to.equal(response.body._id)
            })
        })

        it("should return a 400 error when input is invalid", async () => {

            // Define invalid request data
            let payment_data = {
                version: 'AAAA',    // INVALID
                organisation_id: '000000'
            }

            // Make request
            const response = await request(app).post("/api/v1/payments/").send(payment_data)

            // Evaluate response
            expect(response.status).to.equal(400)
            expect(response.body).to.deep.equal(errors.InvalidDataError)

            // Evaluate effect on DB
            models.Payment.find({}, (err, payments) => {
                expect(err).to.be.null
                expect(payments.length).to.equal(0)
            })
        })
    })
})
