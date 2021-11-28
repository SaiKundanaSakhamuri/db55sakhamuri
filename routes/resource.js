var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var kid_controller = require('../controllers/kid');

/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// gas ROUTES ///
// POST request for creating a kid.
router.post('/resource/kid', kid_controller.kid_create_post);
// DELETE request to delete kid.
router.delete('/resource/kid/:id', kid_controller.kid_delete);
// PUT request to update kid.
router.put('/resource/kid/:id', kid_controller.kid_update_put);
// GET request for one kid.
router.get('/resource/kid/:id', kid_controller.kid_detail);
// GET request for list of all kid items.
router.get('/resource/kid', kid_controller.kid_list);
module.exports = router;