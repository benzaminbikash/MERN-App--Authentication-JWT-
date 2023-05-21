const jwt = require('jsonwebtoken')

const generateToken = id => {
  return jwt.sign({ userId: id }, process.env.JWT_SCRET, { expiresIn: '4d' })
}
module.exports = generateToken
