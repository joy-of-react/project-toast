import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ data, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {data.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            content={toast.message}
            id={toast.id}
            handleDismiss={handleDismiss}
          ></Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
