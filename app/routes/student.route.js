var express = require('express');
var router = express.Router();
const Controllers = require('../controller');
const bodyParser = require("body-parser");

// 解析以 application/json 和 application/x-www-form-urlencoded 提交的数据
// var jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.post('/add', bodyParser.json(), Controllers.students.create);
router.get('/list', bodyParser.json(), Controllers.students.getList)

module.exports = router;