const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes/userRoute')
const errrorHandler = require('./middleware/errrorHandler')

app.use(cors())
app.use(express.json())

//router register:
app.use('', router)
//globally error handling
app.use(errrorHandler)

//connect mongoose
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Server connecting on PORT')
    })
  })
  .catch(() => {
    console.log('Server not connecting')
  })
