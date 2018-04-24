const express = require('express')
require('./globals')
const app = express()
const bankApi = require('./api-bank')
var bodyParser = require('body-parser')

function greetMe(req, res) {
  var result = "Hello " + eval(req.body.name) + ". Welcome to Awesome Api!"

  res.json(result)
}

app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res) => res.send('Hello World!\n'))
app.post('/greet', greetMe)
app.use('/api', bankApi)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
