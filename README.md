# Expense Tracker

## Description
The Expense Tracker application is a web app that allows users to manage their finances by tracking their income and expenses. Users can add, edit, and delete transactions, and the app will automatically calculate and display the total balance, income, and expenses.

## Features
- Add new transactions (income or expense).
- Edit existing transactions.
- Delete transactions.
- View total balance, income, and expenses.

## Technologies Used
- React
- CSS Modules
- useReducer for state management

## Project Structure
expense-tracker/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── ExpenseForm/
│ │ │ ├── ExpenseForm.js
│ │ │ └── ExpenseForm.module.css
│ │ ├── ExpenseInfo/
│ │ │ ├── ExpenseInfo.js
│ │ │ └── ExpenseInfo.module.css
│ │ ├── ExpenseList/
│ │ │ ├── ExpenseList.js
│ │ │ └── ExpenseList.module.css
│ │ ├── Transaction/
│ │ │ ├── Transaction.js
│ │ │ └── Transaction.module.css
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ ├── reducer.js
│ └── ...
├── images/
│ ├── edit.png
│ └── trash-bin.png
├── .gitignore
├── package.json
└── README.md
