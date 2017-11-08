const path = require('path')
const env = process.env.NODE_ENV || 'development'
const knex = require('../db/db')


function getAll () {
  return knex('movies')
}

function getOne (id) {
  return knex('movies')
  .where('movies.id', id)
}

function create (body) {
  return knex('movies')
  .insert(body)
  .returning('*')
}

function update (id, body) {
  return knex('movies')
    .where('movies.id', id)
    .update(body)
    .returning('*')
}

function destroy (id) {
  return knex('movies')
    .where('movies.id', id)
    .del()
}

module.exports = { getAll, getOne, create, update, destroy, }
