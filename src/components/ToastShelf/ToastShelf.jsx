import React from 'react';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf({ children }) {
  const { setToastsInShelf } = React.useContext(ToastContext);
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setToastsInShelf([]);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setToastsInShelf]);
  return <ol className={styles.wrapper}>{children}</ol>;
}

export default ToastShelf;
