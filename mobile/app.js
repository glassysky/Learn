var express = require('express')
var path = require('path');
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})