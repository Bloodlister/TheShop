const express = require('express');
const router = express.Router();
const CartController = require('../Controllers/CartController');

router.get('/', (req, res) => CartController.index(req, res));

module.exports = router;