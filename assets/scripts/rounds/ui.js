'use strict'

// const store = require('../store')

const addRoundSuccess = function (addRoundResponse) {
  console.log(addRoundResponse)
  $('#add-round-form')[0].reset()
  $('#successModal').modal('show')
  $('#success-message').html('Your round has been added to your profile!')
}

const addRoundError = function (addRoundError) {
  $('#add-round-form')[0].reset()
  $('#add-round-error').delay(100).fadeIn(100)
}

const getRoundsSuccess = function (getRoundsResponse) {
  console.log(getRoundsResponse)
  if (getRoundsResponse.rounds.length === 0) {
    $('#no-rounds-error').delay(100).fadeIn(100)
  }
}

const getRoundsError = function (getRoundsError) {
  $('#get-rounds-error').delay(100).fadeIn(100)
}

// const getRoundSuccess = function (getRoundResponse) {
//   console.log(getRoundResponse)
//   $('#get-round-form')[0].reset()
// }
//
// const getRoundError = function (getRoundError) {
//   $('#get-round-form')[0].reset()
//   $('#get-round-error').delay(100).fadeIn(100)
// }

module.exports = {
  addRoundSuccess,
  addRoundError,
  getRoundsSuccess,
  getRoundsError
  // getRoundSuccess,
  // getRoundError
}
