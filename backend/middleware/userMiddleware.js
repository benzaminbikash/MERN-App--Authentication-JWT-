const jwt = require('jsonwebtoken')
const asyncHandler = require('../helper/asyncHandler')
const userModal = require('../models/userModal')

const userMiddleware = asyncHandler(async (req, res, next) => {
  const { authorization } = req.headers
  let token
  if (authorization && authorization.startsWith('Bearer')) {
    token = authorization.split(' ')[1]
    const { userId } = jwt.verify(token, process.env.JWT_SCRET)
    req.user = await userModal.findById(userId).select('-password')
    next()
  } else {
    throw new Error('Please Login First')
  }
  if (!token) {
    throw new Error('Token Needed')
  }
})

module.exports = { userMiddleware }
