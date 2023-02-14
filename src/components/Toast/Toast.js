import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import { ToastContext } from "../ToastProvider";
import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, type, message }) {
  const { removeToast } = React.useContext(ToastContext);
  const Icon = ICONS_BY_VARIANT[type];

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{type} - </VisuallyHidden>
        {message}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => removeToast(id)}
        aria-label="Dismiss message"
        aria-live="Off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
