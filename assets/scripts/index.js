'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events')
const roundsEvents = require('./rounds/events')
// const authApi = require('./auth/api')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.golf-tracker').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#change-pw-error').hide()
  $('#register-error').hide()
  $('#register-success').hide()
  $('#register-form').on('submit', authEvents.onRegister)
  $('#login-error').hide()
  $('#login-form').on('submit', authEvents.onLogIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#login-form-link').on('click', authEvents.onLogInFormLink)
  $('#register-form-link').on('click', authEvents.onRegisterFormLink)
  // Add Round
  $('#add-round-error').hide()
  $('#add-round-form').on('submit', roundsEvents.onAddRound)
  // Get Round By ID
  // $('#get-round-error').hide()
  // $('#get-round-form').on('submit', roundsEvents.onGetRound)
  // Get Rounds
  $('#get-rounds-error').hide()
  $('#no-rounds-error').hide()
  $('#get-rounds').on('click', roundsEvents.onGetRounds)
  $('#content-header').hide()
  $('.content').hide()
  $('.add-round-tab').on('click', roundsEvents.onAddRoundTabClick)

  // Get Rounds by clicking 'View Rounds' tab
  // $('.view-rounds-tab').click(function () {
  //   if ($(this).is(':checked')) {
  //     console.log('It worked!')
  //   }
  // })
})
