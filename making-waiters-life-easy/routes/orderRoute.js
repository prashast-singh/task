const express = require('express')
const orderController = require('../controller/orderController')
const router = express.Router()


router.post('/order', orderController.postOrder)

router.get('/order', orderController.getOrder)

router.put('/order', orderController.putOrder)

router.delete('/order', orderController.deleteOrder)

module.exports = router
