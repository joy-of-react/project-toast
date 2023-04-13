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
import { ToastCtx } from "../ToastProvider/ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ toastId, variant, children }) {
  const Icon = ICONS_BY_VARIANT[variant];
  const { dismissToast } = React.useContext(ToastCtx);

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <VisuallyHidden>{variant + " -"}</VisuallyHidden>
      <p className={styles.content}>{children}</p>
      <button
        className={styles.closeButton}
        onClick={dismissToast(toastId)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
