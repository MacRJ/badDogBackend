var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt')

/* GET home page. */
router.get('/login', function(req, res, next) {
  return "test";
});

module.exports = router;
