import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
        {toasts.map(({ id, message, variant }) => (
            <li key={id} className={styles.toastWrapper}>
                <Toast id={id} variant={variant} handleDismiss={handleDismiss}>
                    {message}
                </Toast>
            </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
