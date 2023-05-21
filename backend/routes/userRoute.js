const express = require('express')
const {
  userCreation,
  loginUser,
  getUser
} = require('../controllers/userController')
const router = express.Router()
const { userMiddleware } = require('../middleware/userMiddleware')

router.post('/usercreation', userCreation)
router.post('/login', loginUser)
router.get('/user', userMiddleware, getUser)

module.exports = router
