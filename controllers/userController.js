const { User, Doctor, Patient } = require('../models')
async function getAll(req, res) {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ['password', 'DoctorId', 'PatientId'],
      },
      include: [
        {
          model: Doctor,
          required: false,
          as: 'doctor',
          attributes: {
            exclude: ['UserId']
          }
        },
        {
          model: Patient,
          require: false,
          as: 'patient',
          attributes: {
            exclude: ['UserId']
          }
        },
      ]
    })
    res.send({
      users,
    })
  } catch (error) {
    res.status(500).send({
      message: error.message
    })
  }
}

module.exports = {
  getAll
}