const express = require('express')
const path = require('path')
const fs = require('fs').promises

const apiDocs = express.Router()

apiDocs.get('/', async (req, res) => {
  const apiDocs = await fs.readFile(path.join(__dirname, '../api-docs/api.yml'))
  return res.send(apiDocs)
})

module.exports = apiDocs
