import React from "react";
import styles from "./RadioButton.module.css";

function RadioButton({ variant, ...rest }) {
  return (
    <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
      <label htmlFor="variant-notice">
        <input
          id={variant}
          type="radio"
          name="variant"
          value={variant}
          {...rest}
        />
        {variant}
      </label>
    </div>
  );
}

export default RadioButton;
