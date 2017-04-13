var express = require('express');
var SpotsService = require('../services/spots/SpotsService');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   SpotsService.getAll().then((spots) => res.send(spots))
});

module.exports = router;
