// ExpenseForm.js
import React, { useState, useEffect } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ addTransaction, editTransaction, transactionToEdit }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (transactionToEdit) {
      setText(transactionToEdit.text);
      setAmount(transactionToEdit.amount);
      setIsEditing(true);
    }
  }, [transactionToEdit]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      editTransaction({ ...transactionToEdit, text, amount: +amount });
      setIsEditing(false);
    } else {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
      };
      addTransaction(newTransaction);
    }

    setText("");
    setAmount("");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h3>{isEditing ? "Edit transaction" : "Add new transaction"}</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense, positive - income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button className={styles.submitBtn}>
        {isEditing ? "Update Transaction" : "Add Transaction"}
      </button>
    </form>
  );
};

export default ExpenseForm;
