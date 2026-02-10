import {createPortal} from "react-dom";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, dismiss }) {
  return createPortal(
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            message={toast.message}
            dismiss={() => dismiss(toast.id)}
          />
        </li>
      ))}
    </ol>,
    document.getElementById("toast-root"),
  );
}

export default ToastShelf;
