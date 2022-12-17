const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiControllers');

// API para crear usuario.
router.get('/signup', apiController.create_user);