import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const Dashboard = ({ expenses, summary }) => {
  const data = [
    { name: 'Income', value: summary.income, fill: '#00C49F' },
    { name: 'Expense', value: summary.expense, fill: '#FF8042' }
  ];

  return (
    <div>
      <h2>Expense Summary</h2>
      <PieChart width={400} height={400}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={150} labelLine={false} label={({ name }) => name} />
        <Tooltip />
        <Legend />
      </PieChart>

      <h2>Expenses List</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense._id}>{expense.description}: ${expense.amount} ({expense.type})</li>
        ))}
      </ul>

      <Link to="/add">Add New Expense</Link>
    </div>
  );
};

export default Dashboard;
