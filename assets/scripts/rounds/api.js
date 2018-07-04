'use strict'
const store = require('../store')
const config = require('../config')

const addRound = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'rounds',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  addRound
}
