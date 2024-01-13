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

function Toast({variant, children, handleClose, id}) {
  console.log(variant,children)
  const IconSelected = ICONS_BY_VARIANT[variant];
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <IconSelected size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {children}
      </p>
      <button className={styles.closeButton} onClick={() => handleClose(id)} aria-label="Dismiss message" aria-live="off">
        <X size={24} />
        {/* <VisuallyHidden>Dismiss message</VisuallyHidden> */}
      </button>
    </div>
  );
}

export default Toast;
