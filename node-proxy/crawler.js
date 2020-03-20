/*
*爬虫
*/

var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.get('/', function (req, res, next) {
  superagent.get('https://cnodejs.org/')
    .end(function (err, sres) {
      if (err) {
        return next(err);
      }
      var $ = cheerio.load(sres.text);
      var items = [];
      $('#sidebar .user_name a').each(function (idx, element) {
       
        var $element = $(element);
        items.push({
          title: $element.attr('title'),
          href: $element.attr('href')
        });
      });
      res.send(items);
    });
});

app.listen(8082, function () {
  console.log('HTTP Server is running in http://127.0.0.1:8082')
})