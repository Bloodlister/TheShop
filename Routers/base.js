const express = require('express');
const router = express.Router();

const BaseController = require('./../Controllers/BaseController');

router.get('/', (req, res) => BaseController.Index(req, res));

module.exports = router;