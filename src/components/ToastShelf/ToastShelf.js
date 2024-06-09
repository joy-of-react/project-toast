import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ items, onDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {items.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            isOpen
            onDismiss={() => onDismiss(id)}
            message={message}
            variant={variant}
          >
            Example notice toast
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
