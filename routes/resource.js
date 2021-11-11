var express = require('express'); 
var router = express.Router(); 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var kid_controller = require('../controllers/kid'); 
/// API ROUTE /// 
// GET resources base. 
router.get('/', api_controller.api); 
/// kid ROUTES /// 
// POST request for creating a kid.  
router.post('/kid', kid_controller.kid_create_post); 
// DELETE request to delete kid. 
router.delete('/kid/:id', kid_controller.kid_delete); 
// PUT request to update kid. 
router.put('/kid/:id', kid_controller.kid_update_put); 
// GET request for one kid. 
router.get('/kid/:id', kid_controller.kid_detail); 
// GET request for list of all kid items. 
router.get('/kid', kid_controller.kid_list); 
module.exports = router; 