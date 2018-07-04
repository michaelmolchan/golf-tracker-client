'use strict'

// const store = require('../store')

const addRoundSuccess = function (addRoundResponse) {
  console.log(addRoundResponse)
  $('#add-round-form')[0].reset()
}

const addRoundError = function (addRoundError) {
  $('#add-round-form')[0].reset()
}

module.exports = {
  addRoundSuccess,
  addRoundError
}
