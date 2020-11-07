const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.json())

app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

app.use('/ping', (_req, res) => {
  res.status(200).send('pong')
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
