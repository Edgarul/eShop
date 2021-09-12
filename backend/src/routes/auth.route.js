const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/signup',[
    body('email', 'Por favor ingresa un correo electrónico')
        .normalizeEmail()
        .trim()
        .isEmail()
        .withMessage('Por favor ingresa un correo válido 😠'),
    body('password', 'Por favor ingresa una contraseña')
        .isLength({ min: 8 })
        .withMessage('Por favor ingresa una contraseña con 8 o más caracteres')
        .notEmpty(),
    body('confirmPassword', 'Por favor confirma tu contraseña')
        .custom((value, { req }) => value === req.body.password)
        .withMessage('Las contraseñas no coinciden')
        .notEmpty(),
], authController.signup);

router.post('/login',[
    body('email', 'Por favor ingresa un correo válido 😠').isEmail(),
    body('password', 'Por favor ingresa una contraseña').notEmpty(),
], authController.login);

module.exports = router;
