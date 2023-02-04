import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast
            key={toast.id}
            variant={toast.variant}
            handleDismiss={() => handleDismiss(toast.id)}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
