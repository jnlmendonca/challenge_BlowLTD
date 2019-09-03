var mongoose = require('mongoose')
var models = require('./models')


// Define connection parameters
const username = process.env.MONGO_INITDB_ROOT_USERNAME
const password = process.env.MONGO_INITDB_ROOT_PASSWORD
const database = process.env.MONGO_INITDB_DATABASE
const connectionUri = `mongodb://${username}:${password}@mongo:27017/${database}?authSource=admin`

// Connect
mongoose
    .connect(connectionUri, {useNewUrlParser: true})
    .then(() => {
        console.log('Connection to DB was successful.')
    }).catch(() => {
        console.log('Connection to DB failed. Terminating...')
        process.exit();
    })

module.exports = models
