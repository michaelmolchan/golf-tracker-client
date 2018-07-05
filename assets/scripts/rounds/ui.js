'use strict'

// const store = require('../store')
const showRoundsTemplate = require('../templates/round-listing.handlebars')

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
  $('#get-rounds-error').hide()
  $('#content-header').show()
  $('.content').show()
  $('#get-rounds').hide()
  const showRoundsHtml = showRoundsTemplate({ rounds: getRoundsResponse.rounds })
  if (getRoundsResponse.rounds.length === 0) {
    $('#no-rounds-error').delay(100).fadeIn(100)
  } else {
    $('.content').append(showRoundsHtml)
  }
}

const getRoundsError = function (getRoundsError) {
  $('#get-rounds-error').delay(100).fadeIn(100)
}

const removeRoundSuccess = function (removeRoundsSuccess) {
  $('#successModal').modal('show')
  $('#success-message').html('You successfully removed this round!')
}

const removeRoundError = function (removeRoundsError) {
  console.log(removeRoundsError)
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
  getRoundsError,
  removeRoundSuccess,
  removeRoundError
  // getRoundSuccess,
  // getRoundError
}
