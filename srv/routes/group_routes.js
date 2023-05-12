const express = require('express');
const router = express.Router();

const group_controller = require('../controllers/groupController');

/* POST group create. */
router.post('/', group_controller.group_create);

router.get('/:groupId', group_controller.group_detail);

router.get('/:groupId/users/:userId', group_controller.add_user_to_group);

module.exports = router;
