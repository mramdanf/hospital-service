const { validationResult } = require('express-validator')
const get = require('lodash/get')
const { MedicalRecord } = require('../models')

async function submitMedicalRecord(req, res) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Request body validation failed', errors: errors.array() });
    }
    
    const { diagnos, patientId, doctorId } = get(req, 'body', {})
    MedicalRecord.create({
      diagnos,
      patientId,
      doctorId
    })
    res.send({
      message: 'Medical record successfully added'
    })
  } catch (error) {
    res.status(500).send({
      message: 'Oops, something went wrong'
    })
  }
}

module.exports = {
  submitMedicalRecord
}