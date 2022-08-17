const User = require('../models').User
async function getAll(req, res) {
  try {
    const users = await User.findAll()
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