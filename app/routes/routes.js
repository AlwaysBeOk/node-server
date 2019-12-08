'use strict';

const middleware = require('../middleware');
const students = require('./student.route');

module.exports = function (app) {
  app.use(function (req,res, next) {
    res.setHeader('Last-Modified',(new Date()).toUTCString());
    next();
  })

  app.get('/', () => {
    return require('../view');
  })
  // app.get('/users', Controllers.users.create);

  // 学生路由总入口
  app.use('/student', students)
  // 处理404和500的中间件
  app.use(middleware.notFind);
  app.use(middleware.serverError);
};
