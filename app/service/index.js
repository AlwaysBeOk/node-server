'use strict';

const Services = {};

Services.users = require('./users');
Services.students = require('./student.server');

module.exports = Services;