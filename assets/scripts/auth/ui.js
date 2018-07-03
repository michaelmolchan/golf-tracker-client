'use strict'

const store = require('../store')

const registerSuccess = function (registerResponse) {
  $('#signUpModal').modal('hide')
  $('#sign-up-form')[0].reset()
  $('#sign-up-error').hide()
}

const registerError = function (registerError) {
  $('#register-error').show()
  $('#register-form')[0].reset()
}

const logInSuccess = function (logInResponse) {
  store.user = logInResponse.user
  $('#signInModal').modal('hide')
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-in-error').hide()
  $('#sign-up-error').hide()
}

const logInError = function (logInError) {
  $('#login-error').show()
  $('#login-form')[0].reset()
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#change-password-form')[0].reset()
  $('#change-pw-error').hide()
  $('#change-pw-success-message').show()
}

const changePasswordError = function (changePasswordError) {
  $('#change-pw-success-message').hide()
  $('#change-pw-error').show()
  $('#change-password-form')[0].reset()
}

const signOutSuccess = function (signOutResponse) {
  delete store.user
  $('#sign-out-success-message').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-in-form')[0].reset()
}

const signOutError = function (signOutError) {
  // console.log('something went wrong. Here\'s your error: ', signOutError)
}

module.exports = {
  registerSuccess,
  registerError,
  logInSuccess,
  logInError,
  signOutSuccess,
  signOutError,
  changePasswordSuccess,
  changePasswordError
}
