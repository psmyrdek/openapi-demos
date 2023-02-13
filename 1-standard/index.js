const express = require('express')
const bodyParser = require('body-parser')
const carsApi = require('./routes/cars')
const apiDocsApi = require('./routes/api')

const app = express()
app.use(bodyParser.json({ type: 'application/json' }))

app.use('/cars', carsApi)
app.use('/docs', apiDocsApi)

app.get('/', (req, res) => {
  return res.send('Hello world from Cars Store!')
})

app.listen(8080, () => {
  console.log('API available at localhost:8080')
})
