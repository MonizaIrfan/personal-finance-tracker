
---
# Personal Finance Tracker 🏦💰

A modern and fully-responsive **Personal Finance Tracker** app built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). This app helps users easily manage their income, expenses, and budgets, track their financial progress, visualize spending through charts, and export data for offline use.

---

### 📌 **Key Features**

- **User Authentication** 🔒: Register and login with JWT-based authentication.
- **CRUD Operations** ➕➖: Create, read, update, and delete income and expense records.
- **Dynamic Data Visualization** 📊: Display your financial data through interactive charts (using **Chart.js**).
- **Budget Tracker** 📈: Set monthly budgets and track how much you've spent vs your target.
- **CSV/PDF Export** 🗂️: Export your transactions to CSV or PDF for reports.
- **PWA Support** 🌐: Work offline with Progressive Web App (PWA) functionality.
- **Responsive UI** 📱💻: Optimized for all screen sizes with a mobile-first approach.

---

### 🔧 **Technologies Used**

- **Frontend**:
  - React.js ⚛️
  - Redux/Context API for state management
  - Chart.js 📉 for data visualization
  - Axios for API requests 🌐
  - React Router for navigation 🔄
  - Service Workers for PWA 🖥️

- **Backend**:
  - Node.js with Express.js ⚙️
  - MongoDB 🗄️
  - JWT for authentication 🔑
  - bcrypt.js for password hashing 🔐

---

### 🖥️ **Installation Instructions**

To get started with the Personal Finance Tracker app, follow these steps to run it locally.

#### 1. **Clone the repository**:
```bash
git clone https://github.com/yourusername/personal-finance-tracker.git
cd personal-finance-tracker
```

#### 2. **Set up the Backend (Server)**

Navigate to the `server` directory and install dependencies:
```bash
cd server
npm install
```

Create a `.env` file in the `server` folder to store your MongoDB URI and JWT secret (for production):
```bash
MONGO_URI=mongodb://localhost:27017/finance-tracker
JWT_SECRET=your_secret_key
```

Start the backend server:
```bash
npm start
```

The server will now run on `http://localhost:5000`.

#### 3. **Set up the Frontend (Client)**

Navigate to the `client` directory and install dependencies:
```bash
cd client
npm install
```

Start the frontend React application:
```bash
npm start
```

The client-side will now run on `http://localhost:3000`.

---

### 🌐 **How to Use**

1. **Sign Up / Login**: 
   - Register a new account or login if you already have an account.
   - Use **JWT** authentication to keep your sessions secure.

2. **Add Transactions**:
   - Add income or expense records with descriptions, amounts, and categories.
   - View your financial summary in dynamic pie and bar charts.

3. **Track Budgets**:
   - Set a budget for each month and track your progress.
   - Receive visual feedback on how your spending compares to your budget.

4. **Export Data**:
   - Export your financial records to CSV or PDF files for offline analysis.

5. **PWA Functionality**:
   - Access the app offline once it's installed on your device.

---

### ⚙️ **Project Structure**


### 📄 **Licenses**

This project is open-source and available under the [MIT License](LICENSE).

---

### 💬 **Contributing**

Feel free to fork this project, open issues, or submit pull requests. Contributions are always welcome!

---

### 📞 **Contact**

For any queries, please contact (https://www.linkedin.com/in/moniza-irfan-3b93b5209/).

---

### 🧑‍💻 **Follow Me**

- [GitHub](https://github.com/MonizaIrfan)
- [LinkedIn](https://www.linkedin.com/in/moniza-irfan-3b93b5209/)

---

This README will make your project look well-organized and professional, showcasing all the key features and making it easy for others to run your app locally and contribute.
