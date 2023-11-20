import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toastList, handleDismiss } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toastList.map((toast) => (
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
