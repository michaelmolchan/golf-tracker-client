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

const onGetRounds = function (event) {
  event.preventDefault()
  roundsApi.getRounds()
    .then(roundsUi.getRoundsSuccess)
    .catch(roundsUi.getRoundsError)
}

// const onGetRound = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data)
//   roundsApi.getRound(data)
//     .then(roundsUi.getRoundSuccess)
//     .catch(roundsUi.getRoundError)
// }

const onAddRoundTabClick = function () {
  $('#get-rounds-error').hide()
  $('#no-rounds-error').hide()
  $('.content').html('')
  $('#content-header').hide()
  $('.content').hide()
  $('#get-rounds').show()
}

module.exports = {
  onAddRound,
  onGetRounds,
  onAddRoundTabClick
  // onGetRound
}
