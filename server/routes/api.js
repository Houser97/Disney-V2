const express = require('express');
const router = express.Router();
const passport = require('passport')

const apiController = require('../controllers/apiControllers');
const user = require('../models/user');

// API para crear usuario.
router.post('/signup', apiController.create_user);

router.get('/login', apiController.login);

router.get('/logout', apiController.logout);

router.post('/check_email', apiController.check_email);

router.post('/update_avatar', apiController.update_avatar);

router.get('/check_if_user_is_logged', apiController.check_if_user_is_logged);

router.post('/login', apiController.login, apiController.check_if_user_is_logged);

module.exports = router