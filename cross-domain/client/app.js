var express = require('express')
var path = require('path')
var app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.send('client')
})

app.listen(4000, function () {
  console.log('client app listening on port 4000!')
})