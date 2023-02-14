import React from "react";
import { ToastContext } from "../ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toasts.map(({ id, type, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            id={id}
            type={type}
            message={message}
            removalFunction={removeToast}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
