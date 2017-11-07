const path = require('path')
const env = process.env.NODE_ENV || 'development'
const knex = require('../db/db')



function _all () {
  return knex('movies')
}

function _findById (id) {
  return (el) => el.id == id
}

function getAll () {
  return _all()
}

function getOne (id) {
  return _all().then(movies => {
    return movies.find(_findById(id))
  })
}

function create (body) {
  return _all()
  .insert(body)
  .returning('*')
  .then(([movie]) => movie)
}

function update (id, body) {
  return _all()
    .where('movies.id', id)
    .update(body)
    .returning('*')
    .then(([movie]) => movie)
}

function destroy (id) {
  return _all()
    .where('movies.id', id)
    .del()
}

module.exports = { getAll, getOne, create, update, destroy, _findById }
