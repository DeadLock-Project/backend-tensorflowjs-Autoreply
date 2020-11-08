const get_simi = require('../tf/fn')

const tfRouter = require('express').Router()

tfRouter.get('/', (_req, res) => {
  res.status(200).json({ message: 'Tensorflow.js server is running', up: true })
})

tfRouter.post('/', async (req, res) => {
  const sentences = req.body.sentences
  const result = await get_simi(sentences)

  res.status(200).json(result)
  // res.status(200).json({ Similarity: Math.random() })
})

module.exports = tfRouter
