const model = require('../models/movies')
const fields = ['title', 'director', 'year', 'rating', 'posterURL']

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
    console.log('test');
    res.status(200).json({ movie })
  })
}

function destroy (req, res, next) {
  const id = req.params.id
  model.destroy(id).then(num => {
    res.status(200).json({ num })
  })
}

function doesItExist (req, res, next) {
  const id = req.params.id
  console.log('before then');
  model.getOne(id).then(movie => {
    if(movie.length){
      console.log('short');
      next()
    }else{
      const status = 404
      const message = `Movie with id ${id} could not be found`
      next({ status, message })
    }
  })
}

function cleanse (req, res, next) {
  Object.keys(req.body).forEach(key => {
    if(!fields.includes(key)) delete req.body[key]
  })

  next()
}

function complete (req, res, next) {
  const errors = fields.filter(field => !req.body[field])
    .map(value => `${id} is required`)

  if(errors.length){
    const status = 400
    const message = `Fields are missing: ${errors.join(', ')}`
    next({ status, message })
  }

  next()
}

module.exports = {
  getAll, getOne, create, update, destroy,
  validations: { doesItExist, cleanse, complete }
 }
