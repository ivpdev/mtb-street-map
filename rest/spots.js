var express = require('express');
var router = express.Router();
var SpotsService = require('../services/SpotsService');

/* GET home page. */
router.get('/', function(req, res, next) {
   SpotsService.getAll().then((spots) => res.send(spots))
});

module.exports = router;
