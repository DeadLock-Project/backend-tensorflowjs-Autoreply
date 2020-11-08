const tfRouter = require('express').Router()

tfRouter.get('/', (_req, res) => {
  res.status.send('Tensorflow.js server is running')
})

tfRouter.post('/', async (req, res) => {
  const body = req.body

  res.status(200).json({ Similarity: Math.random() })
})

module.exports = tfRouter
