// Transaction.js
import React, { useState } from "react";
import styles from "./Transaction.module.css";
import EditImage from "../../images/edit.png";
import DeleteImage from "../../images/trash-bin.png";

const Transaction = ({ transaction, index, deleteTransaction, startEditTransaction }) => {
  const [currentHoverIndex, setCurrentHoverIndex] = useState(null);

  return (
    <li
      className={`${styles.transaction} ${
        transaction.amount > 0 ? styles.profit : styles.loss
      }`}
      onMouseOver={() => {
        setCurrentHoverIndex(index);
      }}
      onMouseLeave={() => {
        setCurrentHoverIndex(null);
      }}
    >
      <div>{transaction.text}</div>
      <div className={styles.transactionOptions}>
        <div
          className={`${styles.amount} ${
            currentHoverIndex === index && styles.movePrice
          }`}
        >
          ${transaction.amount}
        </div>
        <div
          className={`${styles.btnContainer} ${
            currentHoverIndex === index && styles.active
          }`}
        >
          <div className={styles.edit} onClick={() => startEditTransaction(transaction)}>
            <img src={EditImage} height="100%" alt="Edit" />
          </div>
          <div
            className={styles.delete}
            onClick={() => deleteTransaction(transaction.id)}
          >
            <img src={DeleteImage} height="100%" alt="Delete" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Transaction;
