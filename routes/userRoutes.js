const router = require('express').Router()
const { userController } = require('../controllers')

router.get('/', userController.getAll)

module.exports = router