var express = require('express')
var router = express.Router()
var Dal = require('./sql-commands')

function getBankData(req, res) {
  var result = Dal.getBankAccounts()

  res.json(result)
}

// define the home page route
router.get('/bank-account', getBankData)

module.exports = router
