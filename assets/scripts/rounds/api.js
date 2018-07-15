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

const getRounds = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + 'rounds',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const removeRound = (roundId) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + 'rounds/' + roundId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRound = (data, roundId) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + 'rounds/' + roundId,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const getRound = function (data) {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + 'rounds/' + data,
//     data: data,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  addRound,
  getRounds,
  removeRound,
  updateRound
  // getRound
}
