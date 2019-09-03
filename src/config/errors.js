const InvalidDataError = {
    message: 'The data sent in the POST request body is invalid.',
    type: 'InvalidDataError',
    code: 1
}

const InvalidIdError = {
    message: 'The ID is invalid.',
    type: 'InvalidParameterError',
    code: 2
}

module.exports = {
    InvalidDataError,
    InvalidIdError
}
