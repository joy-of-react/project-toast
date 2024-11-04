import React, { useContext } from "react";
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

function Toast({ content, variant, id }) {
  const Icon = ICONS_BY_VARIANT[variant];
  const { setList } = useContext(ToastContext);

  const handleClick = () => {
    setList((list) => list.filter((p) => p.id !== id));
  };

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {content}
        <VisuallyHidden>
          {variant}: {content}
        </VisuallyHidden>
      </p>
      <button
        onClick={handleClick}
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
