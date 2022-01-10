const express = require('express');
const router = express.Router();

const { createUserAccount, getAccountDetail } = require('../controllers/account');
const auth = require('../middleware/auth');

router.post('/create/account', auth, createUserAccount);
router.get('/account', auth, getAccountDetail);

module.exports = router;