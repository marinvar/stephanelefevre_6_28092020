const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const mailCrypter = require('../middleware/mail-crypter');
const mailValidator = require('../middleware/mail-validator');
const loginSlowdown = require('../middleware/login-slowdown');


router.post('/signup', mailValidator, mailCrypter, userCtrl.signup);
router.post('/login', loginSlowdown, mailValidator, mailCrypter, userCtrl.login);

module.exports = router;