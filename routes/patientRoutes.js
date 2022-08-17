const route = require('express').Router()
const { patientController } = require('../controllers')

route.get('/:id/medical-records', patientController.getAllMedicalRecords)

module.exports = route