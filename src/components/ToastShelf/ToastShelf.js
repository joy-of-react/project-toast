import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import useToastContext from "../ToastProvider/useToastContext";
import VisuallyHidden from "../VisuallyHidden";

function ToastShelf() {
  const { toasts, handleDismissToast } = useToastContext();

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            isOpen
            onDismiss={() => handleDismissToast(id)}
            message={message}
            variant={variant}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
