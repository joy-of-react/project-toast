import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast/Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [selectedVariant, setSelectedVariant] = React.useState('error');
  const [isToastVisible, setIsToastVisible] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsToastVisible(true);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      {isToastVisible && (
        <Toast variant={selectedVariant} setIsToastVisible={setIsToastVisible}>
          {message}
        </Toast>
      )}

      <div className={styles.controlsWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label
              htmlFor='message'
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id='message'
                value={message}
                className={styles.messageInput}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((variant) => {
                const id = `variant-${variant}`;
                return (
                  <label key={id} htmlFor={id}>
                    <input
                      id={id}
                      type='radio'
                      name='variant'
                      value={variant}
                      checked={selectedVariant === variant}
                      onChange={(event) => {
                        setSelectedVariant(event.target.value);
                      }}
                    />
                    {variant}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
