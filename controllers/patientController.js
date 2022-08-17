const get = require('lodash/get')
const { Patient, MedicalRecord, Doctor } = require('../models')

async function getAllMedicalRecords(req, res) {
  const patientId = get(req, 'params.id', '')
  try {
    const medicalRecords = await Patient.findAll({
      include: {
        model: MedicalRecord,
        as: 'medicalRecord',
        required: false,
        include: {
          model: Doctor,
          as: 'doctor'
        },
        attributes: {
          exclude: ['DoctorId', 'PatientId']
        }
      },
      where: {
        id: patientId
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