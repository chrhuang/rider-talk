var express = require('express');
var router = express.Router();

const user_controller = require('../controllers/userController');

/* GET users listing. */
router.get('/', user_controller.user_list);

/* GET user detail. */
router.get('/:userId', user_controller.user_detail);

module.exports = router;
