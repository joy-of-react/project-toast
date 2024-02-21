import React from 'react';

import styles from './Button.module.css';

function Button({ handleClick, className = '', ...delegated }) {
  return (
    <button
      className={`${styles.button} ${className}`}
      {...delegated}
      onClick={handleClick}
    />
  );
}

export default Button;
