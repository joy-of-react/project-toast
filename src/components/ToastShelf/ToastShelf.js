import React from 'react'
import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf({ toasts, setToasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        const { id, message, variant } = toast
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast
              toasts={toasts}
              setToasts={setToasts}
              id={id}
              variant={variant}
            >
              {message}
            </Toast>
          </li>
        )
      })}
    </ol>
  )
}

export default ToastShelf
