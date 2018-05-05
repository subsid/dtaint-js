require('babel-core').buildExternalHelpers()
require('./globals')

const { dbCall } = require('./dbCall')

function makeDbCall1() {
  dbCall("makeDbCall1 query")
}

function makeDbCall2() {
  dbCall("makeDbCall2 query")
}

function callDb() {
  dbCall("callDb query")
}

makeDbCall1()
