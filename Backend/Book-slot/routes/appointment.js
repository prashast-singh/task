const express = require('express');
const backendAdminController = require('../controller/backendAdmin');
const router = express.Router();

router.post('/appointment', backendAdminController.postAppointment)

router.get('/appointment', backendAdminController.getAppointment)

router.delete('/appointment', backendAdminController.deleteAppointment)

module.exports = router