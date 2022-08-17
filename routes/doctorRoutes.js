const doctorRoutes = require('express').Router()
const medicalRecordRoutes = require('express').Router()
const { body } = require('express-validator')
const { doctorController } = require('../controllers')


medicalRecordRoutes.route('/')
  .post(
    body('doctorId').not().isEmpty(),
    body('patientId').not().isEmpty(),
    body('diagnos').not().isEmpty(),
    doctorController.submitMedicalRecord
  )

doctorRoutes.use('/medical-records', medicalRecordRoutes)

module.exports = doctorRoutes