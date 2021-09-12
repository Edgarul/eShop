const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const AuthController = {};

AuthController.signup = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let {body} = req;
    let user = new User();

    bcrypt.hash(body.password, 10, function(err, hash){
        if(hash){
            user.password = hash;
            user.email = body.email;
            user.save((err, user_save) => {
                if(err){
                    return res.status(500).send({error: "No se registro el usuario"});
                }

                return res.status(200).send({user: user_save});
            });
        }
    });
};

AuthController.login = (req, res) => {
    let { body } = req; // let body = req.body;
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    return res.json("Test");
};

module.exports = AuthController;
