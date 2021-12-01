var express = require('express'); 
const kid_controlers= require('../controllers/kid'); 
var router = express.Router(); 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET kid */ 
router.get('/', kid_controlers.kid_view_all_Page ); 
/* GET detail kid page */ 
router.get('/detail', kid_controlers.kid_view_one_Page); 
/* GET create kid page */ 
router.get('/create',secured, kid_controlers.kid_create_Page);
/* GET create update page */ 
router.get('/update',secured, kid_controlers.kid_update_Page); 
/* GET create kid page */ 
router.get('/delete',secured, kid_controlers.kid_delete_Page); 
module.exports = router; 