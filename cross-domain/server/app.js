var express = require('express')
var path = require('path')
var app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
  res.send(req.query.callback + '(' + '{ip: 1}' + ')');
  // res.send('service')
  console.log('receive');
})

app.listen(3000, function () {
  console.log('server app listening on port 3000!')
})