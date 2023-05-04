import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';
import { useEscapeKey } from '../../hooks/useEscapeKey';

function ToastShelf({ toasts }) {
  const { toastsInShelf, setToastsInShelf } = React.useContext(ToastContext);
  const handleDismiss = React.useCallback(() => {
    setToastsInShelf([]);
  }, [setToastsInShelf]);

  useEscapeKey(handleDismiss);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            message={toast.message}
            variant={toast.variant}
            onDismiss={() => {
              setToastsInShelf(toastsInShelf.filter((t) => t.id !== toast.id));
            }}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
