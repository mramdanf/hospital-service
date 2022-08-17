const get = require('lodash/get')
const { Patient, MedicalRecord } = require('../models')

async function getAllMedicalRecords(req, res) {
  const patientId = get(req, 'params.id', '')
  try {
    const medicalRecords = await Patient.findAll({
      include: {
        model: MedicalRecord,
        required: false,
      }
    })
    res.send({
      medicalRecords
    })
  } catch (error) {
    res.status(500).send({
      message: error.message
    })
  }
}

module.exports = {
  getAllMedicalRecords
}