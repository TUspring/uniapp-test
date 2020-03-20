
var express = require('express');
// var request = require('superagent');
var app = express();

/**
 * CORS support. 
 */

app.all('*', function (req, res, next) {
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  res.set('Access-Control-Allow-Max-Age', 3600);
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

app.get('/login', function (req, res) {
  //写进数据库
  var User = require('../schema/user.js');
  var saveUser = new User({
    username: req.query.username, //用户账号 
    userpwd: req.query.password, //密码
    userage: req.query.age, //年龄 
    user_id: Math.ceil(Math.random() * 10000000000),
    logindate: new Date() //最近登录时间 });
  })
  saveUser.save(function (err, res) {
    if (err) {
      console.log("Error:" + err);
    } else {
      console.log("Res:" + res);
      res.send({
        status: 200,
        data: {
          message: '登录成功'
        }
      })
    }
  })
  // res.status(404).send('404!')
  // res.status(500).send({ error: '500' })
})

app.listen(8888, function () {
  console.log('HTTP Server is running in http://127.0.0.1:8888')
})