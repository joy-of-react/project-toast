import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastMessagesContext } from '../ToastProvider';
function ToastShelf() {
  const {toastMessages, handleClose} = React.useContext(ToastMessagesContext);
  
  return (
    <ol className={styles.wrapper}
        role="region"
      aria-live="polite"
      aria-label="Notification">
      {toastMessages.map(msg => {
        return (
          <li className={styles.toastWrapper} key={msg.key}>
            <Toast variant={msg.variantSelected} handleClose={handleClose} id={msg.key}>{msg.content}</Toast>
          </li>
        )
      })}
      {/* <li className={styles.toastWrapper}>
        <Toast variant="notice">Example notice toast</Toast>
      </li>
      <li className={styles.toastWrapper}>
        <Toast variant="error">Example error toast</Toast>
      </li> */}
    </ol>
  );
}

export default React.memo(ToastShelf);
