// App.js
import React, { useReducer, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import { initialState, reducer } from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [transactionToEdit, setTransactionToEdit] = useState(null);

  // Function to add a new transaction
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  // Function to edit a transaction
  const editTransaction = (updatedTransaction) => {
    dispatch({ type: "EDIT_TRANSACTION", payload: updatedTransaction });
    setTransactionToEdit(null);
  };

  // Function to delete a transaction
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const startEditTransaction = (transaction) => {
    setTransactionToEdit(transaction);
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <div className="expenseContainer">
          <ExpenseInfo transactions={state.transactions} />
          <ExpenseForm
            addTransaction={addTransaction}
            editTransaction={editTransaction}
            transactionToEdit={transactionToEdit}
          />
          <ExpenseList
            transactions={state.transactions}
            deleteTransaction={deleteTransaction}
            startEditTransaction={startEditTransaction}
          />
        </div>
      </div>
    </>
  );
};

export default App;
