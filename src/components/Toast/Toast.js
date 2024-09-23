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

function Toast({ message, variant, id, toasts, setToasts }) {
  const theClassName = `${styles.toast} ${styles[variant]}`;
  const IconComponent = ICONS_BY_VARIANT[variant];

  return (
    <div className={theClassName}>
      <div className={styles.iconContainer}>
        <div>{IconComponent && <IconComponent size={24} />}</div>
        <p className={styles.content}>{message}</p>
        <button
          className={styles.closeButton}
          onClick={() => {
            const nextToasts = toasts.filter((item) => item.id != id);
            setToasts((currentValue) => nextToasts);
          }}
        >
          <X size={24} />
          {/* <VisuallyHidden forceShow={forceShow} setForceShow={setForceShow}> */}
          {/* <VisuallyHidden>Dismiss message</VisuallyHidden> */}
        </button>
      </div>
    </div>
  );
}

export default Toast;
