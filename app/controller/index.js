'use strict'

const controllers = {};

controllers.users = require('./users');
controllers.students = require('./student.controller');

module.exports = controllers;