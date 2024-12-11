const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Get all expenses
router.get('/', expenseController.getAllExpenses);

// Add a new expense
router.post('/', expenseController.addExpense);

// Get expenses summary (Income vs Expenses)
router.get('/summary', expenseController.getSummary);

module.exports = router;
