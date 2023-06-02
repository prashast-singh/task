const express = require('express')
const router = express.Router()
const purchseController = require('../controller/purchaseController')
const authorization = require('../middleware/authMiddleware')

router.get('/premium', authorization, purchseController.purchasePremium)
router.post('/premium', authorization,purchseController.updatePurchase)
router.post('/paymentfailure', authorization, purchseController.updateFailure)

router.get("/leaderboard",authorization, purchseController.getLeaderboard )

module.exports = router



