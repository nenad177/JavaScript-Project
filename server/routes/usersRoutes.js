const express = require('express');
const router = express.Router();


const usersController = require('../controllers/usersContoroller');

router.get('/', usersController.getUsers);


router.post('/', usersController.postUser);

module.exports = router;