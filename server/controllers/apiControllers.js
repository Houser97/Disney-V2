const User = require('../models/user');
const {body, validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
const passport = require('passport');

exports.create_user = [
    body('email', 'Email must be a valid address.').isEmail()
        .trim()
        .escape()
        .normalizeEmail(),
    body('pwd', 'Password must not be empty.')
        .isLength({min:8}).withMessage('Password must contain at least 8 characters.')
        .matches('[0-9]').withMessage('Password must contain at least 1 number.')
        .matches('[A-Z]').withMessage('Password must contain at least 1 upper letter.')
        .trim()
        .escape(),
    body('username')
        .trim()
        .escape(),
    
    (req, res, next) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            //Handle errors
            return res.json(errors.array()) //res.json({error:errors.array()});
        }

        bcryptjs.hash(req.body.pwd, 10, (err, hashedPwd) => {
            if(err) return next(err);
            const user = new User({
                email: req.body.email,
                password: hashedPwd,
                username: req.body.username,
                avatar: 'BuzzAvatar',
            }).save((err, user) => {
                if(err) return res.json('error save');
                req.login(user, (err) => {
                    if(err) return res.json('error')
                    return res.json({username: req.user.username, 
                                    watchlist: req.user.watchlist, 
                                    avatar: req.user.avatar,
                                    id: req.user._id})
                })
            })
        })
    }
];

exports.check_email = [
    body('email', 'Email must be a valid address.').isEmail()
    .trim()
    .escape()
    .normalizeEmail(),

    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.json(errors.array())
        } else {
            User.findOne({email: req.body.email}, (err, user) => {
                if(err) return res.json('error');
                return res.json(user)
            })
        }
    }
];

exports. check_password = [
    body('pwd', 'Password must not be empty.')
    .isLength({min:8}).withMessage('Password must contain at least 8 characters.')
    .matches('[0-9]').withMessage('Password must contain at least 1 number.')
    .matches('[A-Z]').withMessage('Password must contain at least 1 upper letter.')
    .trim()
    .escape(),

    (req, res, next) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.json(errors.array());
        }
        return res.json(true)
    }
]

// Actualizar foto de perfil
exports.update_avatar = (req, res, next) => {
    if(req.user){
        const user = new User({
            username: req.user.username,
            password: req.user.password,
            email: req.user.email,
            watchlist: req.user.watchlist,
            avatar: req.body.avatar,
            _id: req.user._id
        });
        User.findByIdAndUpdate(req.user._id, user, {new: true}, (err, user) => {
            if(err) return res.json('error avatar update');
            return res.json({username: user.username, watchlist: user.watchlist, avatar: user.avatar,id: req.user._id})
        })
    } else {
        return res.json('Not Logged In')
    }
}

exports.login = [
    body('email', 'Email must be a valid address.').isEmail()
    .trim()
    .escape()
    .normalizeEmail(),
    body('password', 'Password must not be empty.')
    .isLength({min:8}).withMessage('Password must contain at least 8 characters.')
    .matches('[0-9]').withMessage('Password must contain at least 1 number.')
    .matches('[A-Z]').withMessage('Password must contain at least 1 upper letter.')
    .trim()
    .escape(),
    passport.authenticate('local', {successRedirect: '/api/check_if_user_is_logged',
                                    failureRedirect: '/api/login_failure'})
]

exports.login_failure = (req, res, next) => {
    return res.json(false)
}

exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err) return res.json(false);
        return res.json(true)
    })
}

// Revisar si hay usuario con sesión
exports.check_if_user_is_logged = (req, res, next) => {
    if(req.user){
        return res.json({username: req.user.username,
                        watchlist: req.user.watchlist,
                        avatar: req.user.avatar,
                        id: req.user._id})
    }
    return res.json(false)
};

// Actualizar Watchlist
exports.update_watchlist = (req, res, next) => {
    if(req.user){
        const user = new User({
            username: req.user.username,
            password: req.user.password,
            avatar: req.user.avatar,
            email: req.user.email,
            watchlist: req.body.watchlist,
            _id: req.user._id,
        });

        User.findByIdAndUpdate(req.user._id, user, {new:true}, (err, user) => {
            if(err) return res.json('error update watchlist')
            return res.json({username: user.username,
                            avatar: user.avatar,
                            watchlist: user.watchlist,
                            id: user._id})
        })
    } else {
        return res.json('No user logged')
    }
}