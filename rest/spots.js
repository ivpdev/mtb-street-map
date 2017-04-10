var express = require('express');
var router = express.Router();
var SpotsService = require('../services/SpotsService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(SpotsService.getAll());
});

module.exports = router;
