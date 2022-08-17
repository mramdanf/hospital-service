const get = require('lodash/get');
const { Patient, MedicalRecord, Doctor } = require('../models');

async function getAllMedicalRecords(req, res) {
  const patientId = get(req, 'params.id', '');
  try {
    const patient = await Patient.findByPk(patientId, {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      include: {
        model: MedicalRecord,
        as: 'medicalRecords',
        required: false,
        include: {
          model: Doctor,
          as: 'doctor',
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },
        attributes: {
          exclude: ['DoctorId', 'PatientId', 'createdAt', 'updatedAt'],
        },
      },
    });
    res.send({
      patient,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}

module.exports = {
  getAllMedicalRecords,
};
