const express = require('express')
const router = express.Router();

const {sendEmail} = require('../controllers/mailController')

router.post('/send', (req, res) => sendEmail(req, res))

module.exports = router