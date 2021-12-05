const express = require('express');
//const passport = require('passport');
const router = express.Router();

const { signin } = require('../controllers/signin');

router.post('/login', signin);

module.exports = router;