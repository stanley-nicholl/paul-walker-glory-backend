const model = require('../models/movies')

function getAll(req, res, next) {
  model.getAll().then(movies => {
    res.status(200).json({ movies })
  })
}

function getOne(req, res, next) {
  const id = req.params.id
  model.getOne(id).then(movie => {
    res.status(200).json({ movie })
  })
}

function create(req, res, next) {
  const body = req.body
  model.create(body).then(movie => {
    res.status(201).json({ movie })
  })
}

function update(req, res, next) {
  const id = req.params.id
  const body = req.body
  model.update(id, body).then(movie => {
    res.status(200).json({ movie })
  })
}

function destroy (req, res, next) {
  const id = req.params.id
  model.destroy(id).then(num => {
    res.status(200).json({ num })
  })
}


module.exports = { getAll, getOne, create, update, destroy }
