const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const carsApi = require('./routes/cars')
const swaggerDocument = require('./api-docs/api.json')

const app = express()
app.use(bodyParser.json({ type: 'application/json' }))

app.use('/cars', carsApi)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/', (req, res) => {
  return res.send('Hello world from Cars Store!')
})

app.listen(8080, () => {
  console.log('API available at localhost:8080')
})
