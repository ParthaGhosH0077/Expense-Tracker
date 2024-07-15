import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = ({ transactions }) => {
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(amount => amount < 0).reduce((acc, amount) => (acc += amount), 0) * -1
  ).toFixed(2);

  const balance = amounts.reduce((acc, amount) => (acc += amount), 0).toFixed(2);

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${balance}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${expense}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
