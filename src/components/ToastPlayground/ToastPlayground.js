import React from 'react'
import Toast from '../Toast'
import Button from '../Button'
import styles from './ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  const [formInput, setFormInput] = React.useState({
    message: '',
    variant: '',
    preview: false,
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormInput({
      ...formInput,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setFormInput({
      ...formInput,
      preview: true,
    })
    console.log('Submitting form with values:', formInput)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      <Toast formInput={formInput} setFormInput={setFormInput} />
      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
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
                name='message'
                className={styles.messageInput}
                value={formInput.message}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((variant) => (
                <label htmlFor='variant-notice' key={variant}>
                  <input
                    id='variant-notice'
                    type='radio'
                    name='variant'
                    value={variant}
                    onChange={handleChange}
                  />
                  {variant}
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
        </div>
      </form>
    </div>
  )
}

export default ToastPlayground
