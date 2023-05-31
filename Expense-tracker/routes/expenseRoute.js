const express = require('express')
const expenseController = require('../controller/expenseController')
const router = express.Router()


router.post('/expense', expenseController.postExpense)

router.get('/expense', expenseController.getExpense)

router.put('/expense', expenseController.putExpense)

router.delete('/expense', expenseController.deleteExpense)

module.exports = router