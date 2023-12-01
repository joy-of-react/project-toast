import React from 'react';

// const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function VariantInputs({ variant }) {
  // if (!VARIANT_OPTIONS.includes(variant))
  //   throw new Error(`${variant} not recognized. Expected ${VARIANT_OPTIONS}`);

  return (
    <label htmlFor={`variant-${variant}`}>
      <input
        id={`variant-${variant}`}
        type="radio"
        name="variant"
        value={variant}
      />
      {`${variant}`}
    </label>
  );
}

export default VariantInputs;
