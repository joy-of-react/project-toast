import styles from '../ToastPlayground/ToastPlayground.module.css'

function RadioBtn({ option, variant, setVariant }) {
  const btnId = `variant-${option}`;

  return (
    <div
      className={`${styles.inputWrapper} ${styles.radioWrapper}`}
    >
      <label htmlFor={btnId}>
        <input
          id={btnId}
          type="radio"
          name="variant"
          value={option}
          checked={option === variant}
          onChange={(event) => {
            setVariant(event.target.value)
          }}
        />
        {option}
      </label>
    </div>

  )
}

export default RadioBtn;
