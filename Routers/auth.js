const express = require('express');
const AuthController = require('../Controllers/AuthController');
const router = express.Router();

router.get('/login', (req, res) => AuthController.LoginForm(req, res));
router.post('/login', (req, res) => AuthController.Login(req, res));

router.get('/register', (req, res) => AuthController.RegisterForm(req, res));
router.post('/register', (req, res) => AuthController.Register(req, res));

router.get('/logout', (req, res) => AuthController.Logout(req, res));

module.exports = router;