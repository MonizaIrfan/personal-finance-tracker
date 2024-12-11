import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ExpenseForm = ({ setExpenses }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) {
      alert('Please provide both description and amount.');
      return;
    }

    const newExpense = { description, amount, type };
    
    axios.post('http://localhost:5000/api/expenses', newExpense)
      .then(res => {
        setExpenses(prev => [...prev, res.data]);
        history.push('/'); // Navigate back to the dashboard/homepage
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="expense-form">
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
