const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const expenseRoutes = require('./routes/expenseRoutes');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/expenses', expenseRoutes);

// Listen on port 5000
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
