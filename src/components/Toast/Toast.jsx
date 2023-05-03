import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ message, variant, size = 24, onDismiss }) {
  const variantStyle = styles[variant];
  const Icon = ICONS_BY_VARIANT[variant];
  return (
    <div className={`${styles.toast} ${variantStyle}`}>
      <div className={styles.iconContainer}>
        <Icon size={size} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {message}
      </p>
      <button
        className={styles.closeButton}
        onClick={onDismiss}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={size} />
      </button>
    </div>
  );
}

export default Toast;
