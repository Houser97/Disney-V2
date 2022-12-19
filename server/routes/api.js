const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiControllers');

// API para crear usuario.
router.post('/signup', apiController.create_user);

router.get('/login', apiController.login);

router.post('/check_email', apiController.check_email);

module.exports = router