'use strict';
// 500错误处理中间件

module.exports = (req, res, next) => {
  app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!')
  })
};