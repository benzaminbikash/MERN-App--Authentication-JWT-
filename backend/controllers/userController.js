const asyncHandler = require('../helper/asyncHandler')
const generateToken = require('../helper/tokenGenerator')
const userModal = require('../models/userModal')
const bcrypt = require('bcrypt')

const userCreation = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  if (email && password) {
    const findEmail = await userModal.findOne({ email })
    if (findEmail) {
      throw new Error('Email already exist!')
    } else {
      const salt = await bcrypt.genSalt(10)
      const bcryptpassword = await bcrypt.hash(password, salt)
      const data = await userModal.create({
        email: email,
        password: bcryptpassword
      })
      res.status(200).json({
        status: 'success',
        message: 'create new user.',
        data: data
      })
    }
  } else {
    throw new Error('All field is required.')
  }
})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  if (email && password) {
    const findEmail = await userModal.findOne({ email: email })
    if (findEmail !== null) {
      const passwordCompare = await bcrypt.compare(password, findEmail.password)
      if (findEmail.email === email && passwordCompare) {
        const token = generateToken(findEmail._id)
        res.status(200).json({
          status: 'success',
          message: 'Login Successfully',
          token: token
        })
      } else {
        throw new Error('Email or Password is not match!')
      }
    } else {
      throw new Error('Email or Password is not match!')
    }
  } else {
    throw new Error('All field is required.')
  }
})

const getUser = asyncHandler(async (req, res) => {
  const { email } = req.user
  res.status(200).json({
    status: 'success',
    userEmail: email
  })
})
module.exports = { userCreation, loginUser, getUser }
