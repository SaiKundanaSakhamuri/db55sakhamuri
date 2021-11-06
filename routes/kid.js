var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('kid', { title: 'Search Result for Kid' });
});

module.exports = router;