import React, { useContext } from "react";
import styles from '../ToastPlayground/ToastPlayground.module.css'
import { VariantContext } from "../ToastPlayground/ToastPlayground";

function RadioBtn({ option, ...delegated }) {
  const btnId = `variant-${option}`;
  const variantContext = useContext(VariantContext);
  
  return (
    <div
      className={`${styles.inputWrapper} ${styles.radioWrapper}`}
    >
      <label htmlFor={btnId}>
        <input
          {...delegated}
          id={btnId}
          type="radio"
          name="variant"
          value={option}
          checked={option === variantContext.variant}
          onChange={(event) => {
            variantContext.setVariant(event.target.value)
          }}
        />
        {option}
      </label>
    </div>

  )
}

export default RadioBtn;
