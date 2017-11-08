const express = require('express')
const router = express.Router()
const ctlr = require('../controllers/movies')

router.get('/', ctlr.getAll)
router.get('/:id', ctlr.validations.doesItExist, ctlr.getOne)
router.post('/', ctlr.validations.cleanse, ctlr.validations.complete, ctlr.create)
router.put('/:id', ctlr.validations.doesItExist, ctlr.validations.cleanse, ctlr.validations.complete, ctlr.update)
router.delete('/:id', ctlr.validations.doesItExist, ctlr.destroy)

module.exports = router
