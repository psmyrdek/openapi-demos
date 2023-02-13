const express = require('express')
import { Car } from '../model/Car'

let cars: Car[] = [
  { id: 1, manufacturer: 'Toyota', model: 'Camry' },
  { id: 2, manufacturer: 'Kia', model: 'Ceed' },
  { id: 3, manufacturer: 'VW', model: 'Golf' },
]

const carsApi = express.Router()

carsApi.get('/', (req, res) => {
  return res.json(cars)
})

carsApi.post('/', (req, res) => {
  cars.push({
    id: cars.length + 1,
    manufacturer: req.body.manufacturer,
    model: req.body.model,
  })
  return res.json(cars)
})

carsApi.delete('/:id', (req, res) => {
  const carId = parseInt(req.params.id)

  const car = cars.find((c) => c.id === carId)
  if (!car) {
    res.sendStatus(404)
  }

  cars = cars.filter((c) => c.id !== carId)
  return res.json(cars)
})

module.exports = carsApi
