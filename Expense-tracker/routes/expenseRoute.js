const express = require('express')
const expenseController = require('../controller/expenseController')
const router = express.Router()
const authorization = require('../middleware/authMiddleware')

router.get('/download', authorization, expenseController.download)

router.get('/expense/weekly', authorization, expenseController.weeklyExpense)

router.get('/expense/monthly', authorization, expenseController.monthlyExpense)

router.post('/expense',authorization, expenseController.postExpense)

router.get('/expense', authorization, expenseController.getExpense)

router.put('/expense', expenseController.putExpense)

router.delete('/expense', expenseController.deleteExpense)

module.exports = router