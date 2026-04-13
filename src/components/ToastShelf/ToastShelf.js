import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, dismissToast }) {
  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toasts.map((item) => (
        <li key={item.id} className={styles.toastWrapper}>
          <Toast dismissToast={dismissToast} {...item} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
