'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const roundsApi = require('./api')
const roundsUi = require('./ui')

const onAddRound = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  roundsApi.addRound(data)
    .then(roundsUi.addRoundSuccess)
    .catch(roundsUi.addRoundError)
}

module.exports = {
  onAddRound
}
