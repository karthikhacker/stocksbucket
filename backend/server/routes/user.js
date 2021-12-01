const express = require('express');
const router = express.Router();

//controller
const { signup, accountActivation } = require('../controllers/user');
const { signin } = require('../controllers/authentication');

// validator
const { validatorUser, validate, validateUser } = require('../validators/validator');
// signup 
router.post('/signup', validateUser, validate, signup);
//account activation
router.post('/account/activation', accountActivation);

//Signin
router.post('/login', signin)

module.exports = router;