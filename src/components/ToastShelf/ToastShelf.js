import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, setToasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            message={toast.message}
            id={toast.id}
            toasts={toasts}
            setToasts={setToasts}
          ></Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
