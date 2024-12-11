const Expense = require('../models/Expense');

// Get all expenses
exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Add a new expense
exports.addExpense = async (req, res) => {
  try {
    const { description, amount, type } = req.body;
    const newExpense = new Expense({ description, amount, type });
    await newExpense.save();
    res.json(newExpense);
  } catch (err) {
    res.status(500).json({ msg: "Error adding expense" });
  }
};

// Get income vs expense summary
exports.getSummary = async (req, res) => {
  try {
    const income = await Expense.aggregate([{ $match: { type: 'income' } }, { $group: { _id: null, total: { $sum: '$amount' } } }]);
    const expense = await Expense.aggregate([{ $match: { type: 'expense' } }, { $group: { _id: null, total: { $sum: '$amount' } } }]);
    res.json({ income: income[0]?.total || 0, expense: expense[0]?.total || 0 });
  } catch (err) {
    res.status(500).json({ msg: "Error fetching summary" });
  }
};
