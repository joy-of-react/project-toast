import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ items, onDismiss }) {
  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        <Toast isOpen variant="notice">
          Example notice toast
        </Toast>
      </li>
      <li className={styles.toastWrapper}>
        <Toast isOpen variant="error">
          Example error toast
        </Toast>
      </li>
    </ol>
  );
}

export default ToastShelf;
