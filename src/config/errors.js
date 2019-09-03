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

const BusinessRulePartyConflictError = {
    message: 'The same party is being selected for two different roles in the payment.',
    type: 'BusinessRulePartyConflictError',
    code: 3
}

module.exports = {
    InvalidDataError,
    InvalidIdError,
    BusinessRulePartyConflictError
}
