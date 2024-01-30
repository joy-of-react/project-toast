import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toasts.length > 0 &&
        toasts.map((toast) => {
          return (
            <li key={toast.id} className={styles.toastWrapper}>
              <Toast variant={toast.variant} id={toast.id}>
                {toast.message}
              </Toast>
            </li>
          );
        })}
    </ol>
  );
}

export default ToastShelf;
