var express = require('express'); 
const kid_controlers= require('../controllers/kid'); 
var router = express.Router(); 
 
/* GET kid */ 
router.get('/', kid_controlers.kid_view_all_Page ); 
module.exports = router;