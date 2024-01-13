import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf'
import { ToastMessagesContext } from '../ToastProvider';
const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variantSelected, setVariantSelected] = React.useState(VARIANT_OPTIONS[0]);
  const {createToast} = React.useContext(ToastMessagesContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    createToast(message, variantSelected);
    setMessage('');
    setVariantSelected(VARIANT_OPTIONS[0]);
  }
  
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={(event) => setMessage(event.target.value)}/>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            

            {VARIANT_OPTIONS.map(variantType => {
              return (
                <label htmlFor={`variant-${variantType}`} key={variantType}>
                  <input
                    id={`variant-${variantType}`}
                    type="radio"
                    name="variant"
                    value={variantType}
                    checked={variantSelected===variantType}
                    onChange={(event) => setVariantSelected(event.target.value)}
                  />
                  {variantType}
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
