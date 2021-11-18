var express = require('express');
const kid_controllers= require('../controllers/kid');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('kid', { title: 'Search Results for kid' });
});

/* GET detail kid page */ 
router.get('/detail', kid_controllers.kid_view_one_Page); 

/* GET create kid page */
router.get('/create', kid_controllers.kid_create_Page);

module.exports = router;