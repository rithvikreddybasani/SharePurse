const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require("cors")
const path = require("path")
app.use(cors())
dotenv.config()
app.use(express.json())

const logger = require('./model/helper/logger')
const requestLogger =  require('./model/helper/requestLogger')
const apiAuth =  require('./model/helper/apiAuthentication') //middleware to validate token


const usersRouter = require('./routes/userRouter')
const groupRouter = require('./routes/groupRouter')
const expenseRouter = require('./routes/expenseRouter')
 
app.use(requestLogger)




app.use('/api/users', usersRouter)
app.use('/api/group', apiAuth.validateToken,groupRouter)
app.use('/api/expense', apiAuth.validateToken,expenseRouter)

//To detect and log invalid api hits 
app.all('*', (req, res) => {
    logger.error(`[Invalid Route] ${req.originalUrl}`)
    res.status(404).json({
        status: 'fail',
        message: 'Invalid path'
      })
})

const port = process.env.PORT || 5000
app.listen(port, (err) => {
    console.log(`Server started in PORT | ${port}`)
    logger.info(`Server started in PORT | ${port}`)
})
