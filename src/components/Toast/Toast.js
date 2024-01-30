import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function Toast({ id, variant, children }) {
  const { handleDismiss } = React.useContext(ToastContext);
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>{getIcon(variant)}</div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} - </VisuallyHidden>
        {children}
      </p>
      <button
        aria-live="off"
        aria-label="Dismiss"
        onClick={() => handleDismiss(id)}
        className={styles.closeButton}
      >
        <X size={24} />
      </button>
    </div>
  );
}

const getIcon = (variant) => {
  switch (variant) {
    case "notice":
      return <Info />;
    case "warning":
      return <AlertTriangle />;
    case "success":
      return <CheckCircle />;
    case "error":
      return <AlertOctagon />;
    default:
      return <Info />;
  }
};

export default Toast;
