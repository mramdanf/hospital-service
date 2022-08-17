const { User, Doctor } = require('../models')
async function getAll(req, res) {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Doctor,
          require: false,
        }
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