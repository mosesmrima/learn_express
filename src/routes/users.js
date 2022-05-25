const express = require('express');
const { createUser, allUsers, getUser, delUser, updateUser } = require('../controllers/users');

const router = express.Router();

router.get('/', allUsers);
router.get('/:id', getUser);
router.post('/create', createUser);
router.patch('/update/:id', updateUser);
router.delete('/delete/:id', delUser);

module.exports = router;
