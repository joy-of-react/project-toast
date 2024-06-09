import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import useToastContext from "../ToastProvider/useToastContext";

function ToastShelf() {
  const { toasts, handleDissmisToast } = useToastContext();

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            isOpen
            onDismiss={() => handleDissmisToast(id)}
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
