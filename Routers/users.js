const express = require('express');
const router = express.Router();
const UserController = require('./../Controllers/UserController');


router.get('/', (req, res) => UserController.Profile(req, res));

router.get('/edit', (req, res) => {
    res.send('edit user');
});

module.exports = router;