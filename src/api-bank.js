var express = require('express')
var router = express.Router()
var Dal = require('./sql-commands')

function getBankData(req, res) {
  var result = Dal.getBankAccounts()

  res.json(result)
}

function getInfo(req, res) {
  res.json(Dal.getInfo(req.body.name))
}

// define the home page route
router.get('/bank-account', getBankData)
router.get('/info', getInfo)

module.exports = router
