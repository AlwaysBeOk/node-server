'use strict';

const express = require('express');
const cors = require("cors");
const mysql = require('mysql');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./app/routes/routes');
const wrapQuery = require('./app/utils/service-interceptor');

app.use(cors({credentials: true, origin: 'http://localhost:3001'}));
// 配置静态文件
app.use(express.static(path.join(__dirname, 'app/view')));
// 配置apidoc
app.use('/doc', express.static(path.join(__dirname, 'app/doc')));

// 请求体解析中间件
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 创建数据库连接
const connection = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: '123456',
  database: 'person'
});

global.connection = connection;

// 将数据库请求包装一层，方便之后使用async, await
global.connectionQuery = new wrapQuery().query;

connection.connect((err) => {
  if(err) throw err;
  console.log('连接成功');
});

// 注册路由
routes(app);

module.exports = {app, connection};
