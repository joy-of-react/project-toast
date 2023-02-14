import React from 'react';

import Button from '../Button';
import { ToastContext } from '../ToastProvider';
import ToastShelf from '../ToastShelf/ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const { addToast } = React.useContext(ToastContext);

  const handleMessageChange = (e) => setMessage(e.target.value);
  const handleVariantChange = (e) => setVariant(e.target.value);

  function handleAddToast(e) {
    e.preventDefault();
    addToast(variant, message);
    setMessage('');
  } 

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <form className={styles.controlsWrapper} onSubmit={handleAddToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={handleMessageChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((op) => (
              <label htmlFor={`variant-${op}`} key={op}>
                <input
                  id={`variant-${op}`}
                  type="radio"
                  name="variant"
                  value={op}
                  checked={variant === op}
                  onChange={handleVariantChange}
                />
                {op}
              </label>
            ))}

          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
      
      <ToastShelf />
    </div>
  );
}

export default ToastPlayground;