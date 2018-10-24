const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

const port = process.env.PORT || 3000
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/advert'

// MongoDB Connection
mongoose.connect(mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!', error) // eslint-disable-line no-console
    throw error
  }
})

import router from './routes'

const server = express()

server.use(express.static(path.resolve(__dirname, 'assets')))
server.use('/api', bodyParser.json())
server.use('/api', router)

server.listen(port, (err) => {
  if (err) throw err
  console.log('> Ready on http://localhost:' + port)
})