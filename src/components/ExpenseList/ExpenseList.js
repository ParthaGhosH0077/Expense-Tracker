// ExpenseList.js
import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

const ExpenseList = ({ transactions, deleteTransaction, startEditTransaction }) => {
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {transactions.map((transaction, index) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            index={index}
            deleteTransaction={deleteTransaction}
            startEditTransaction={startEditTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
