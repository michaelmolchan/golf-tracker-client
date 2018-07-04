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

module.exports = {
  addRoundSuccess,
  addRoundError
}
