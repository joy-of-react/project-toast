import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastsContext } from '../ToastProvider';

function ToastShelf() {
  const { toasts } = React.useContext(ToastsContext);

  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast id={toast.id} variant={toast.variant}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
