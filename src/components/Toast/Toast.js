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

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, theme, content, dismissToast }) {
  return (
    <div className={`${styles.toast} ${styles[theme]}`}>
      <div className={styles.iconContainer}>
        <Info size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>error</VisuallyHidden>
        {content}
      </p>
      <button
        aria-label="Dismiss message"
        aria-live="off"
        className={styles.closeButton}
        onClick={() => dismissToast(id)}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
