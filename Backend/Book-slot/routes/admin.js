
const express = require('express');
const adminController = require('../controller/admin');
const router = express.Router();


router.get('/', adminController.getPage)

module.exports = router