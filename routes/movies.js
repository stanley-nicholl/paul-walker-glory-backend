const express = require('express')
const router = express.Router()
const ctlr = require('../controllers/movies')

router.get('/', ctlr.getAll)
router.get('/:id', ctlr.getOne)
router.post('/', ctlr.create)
router.put('/:id', ctlr.update)
router.delete('/:id', ctlr.destroy)

module.exports = router
