const User = require('../models/user');
const {body, validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');

exports.create_user = [
    // Revisar que usuario no exista en base de datos.
    (req, res, next) => {
        User.findOne({email: req.body.email}, (err, user) => {
            if(err) return next(err);
            if(user) return res.json('User exists');
        })
        next();
    },

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
        .escape(),
    
    (req, res, next) => {
        const errors = validationResult(req);
        const user = {
            password: req.body.pwd,
            email: req.body.email
        }

        if(!errors.isEmpty()){
            //Handle errors
            return res.json(false);
        }

        bcryptjs.hash(req.body.pwd, 10, (err, hashedPwd) => {
            if(err) return next(err);
            const user = new User({
                email: req.body.email,
                password: hashedPwd,
                username: req.body.username
            }).save(err => {
                if(err) return next(err);
                return res.json(user)
            })
        })
    }
];