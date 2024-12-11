import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import ExpenseForm from './components/ExpenseForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [summary, setSummary] = useState({ income: 0, expense: 0 });

  // Fetch expenses and summary from API
  useEffect(() => {
    axios.get('http://localhost:5000/api/expenses')
      .then(res => setExpenses(res.data))
      .catch(err => console.error(err));

    axios.get('http://localhost:5000/api/expenses/summary')
      .then(res => setSummary(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Personal Finance Tracker</h1>
        <Switch>
          <Route exact path="/">
            <Dashboard expenses={expenses} summary={summary} />
          </Route>
          <Route path="/add">
            <ExpenseForm setExpenses={setExpenses} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
