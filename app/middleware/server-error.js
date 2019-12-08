'use strict';
// 500错误处理中间件
const Result = require('../utils/package-result');

module.exports = (err, req, res, next) => {
  res.status(500).send(new Result(err, '失败！', false));
};
