const express = require('express');
//const passport = require('passport');
const router = express.Router();

const { signin, userInfo } = require('../controllers/signin');
const auth = require('../middleware/auth');

router.post('/login', signin);
router.get('/user/info', auth, userInfo);
module.exports = router;