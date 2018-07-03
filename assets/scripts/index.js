'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events')
// const authApi = require('./auth/api')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#register-error').hide()
  $('#register-form').on('submit', authEvents.onRegister)
  $('#login-error').hide()
  $('#login-form').on('submit', authEvents.onLogIn)
  // $('#sign-up-error').hide()
  // $('#sign-up-form').on('submit', authEvents.onSignUp)
  // $('#sign-in-error').hide()
  // $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-pw-error').hide()
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#login-form-link').on('click', authEvents.onLogInFormLink)
  $('#register-form-link').on('click', authEvents.onRegisterFormLink)
})
