'use strict';

const middleware = {};

middleware.notFind = require('./not-find');
middleware.serverError = require('./server-error');

module.exports = middleware;