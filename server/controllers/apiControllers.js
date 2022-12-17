const User = require('../models/user');
const {body, validationResult} = require('express-validator');

exports.create_user = [
    body('email', 'Email must be a valid address').isEmail()
        .trim()
        .escape()
        .normalizeEmail(),
    body('pwd', 'Password must not be empty')
        .isLength({min:8}).withMessage('Password must contain at least 8 characters')
        .matches('[0-9]').withMessage('Password must contain at least 1 number')
        .matches('[A-Z]').withMessage('Password must contain at least 1 upper letter')
        .trim()
        .escape(),
    body('username')
        .trim()
        .escape()
];