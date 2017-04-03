var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 检查 session 中的 isVisit 字段
  // 如果存在则增加一次，否则为 session 设置 isVisit 字段，并初始化为 1。
  var greeting = '';
  console.log(req.cookies);
  if(req.session.isVisit) {
    req.session.isVisit++;
    greeting = '第 ' + req.session.isVisit + '次来此页面'
  } else {
    req.session.isVisit = 1;
    greeting = "欢迎第一次来这里"
  }
  res.render('index', { title: greeting });
});

module.exports = router;
