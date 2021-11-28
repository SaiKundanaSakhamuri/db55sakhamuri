var express = require('express');
const kid_controlers= require('../controllers/kid');
var router = express.Router();

/* GET kid page. */
router.get('/', kid_controlers.kid_view_all_Page );
module.exports = router;

// GET request for one kid.
router.get('/kid/:id', kid_controlers.kid_detail);
module.exports = router;

/* GET detail kid page */
router.get('/detail', kid_controlers.kid_view_one_Page);


/* GET create kid page */
router.get('/create', kid_controlers.kid_create_Page);


/* GET create update page */
router.get('/update', kid_controlers.kid_update_Page);

/* GET create kid page */
router.get('/delete', kid_controlers.kid_delete_Page);
module.exports = router;