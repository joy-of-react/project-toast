import React from "react"

function RadioButton({ variant }) {
  const [value, setValue] = React.useState("")

  return (
    <label htmlFor={variant}>
      <input
        id={variant}
        type="radio"
        name="variant"
        value={variant}
        checked={value === variant}
        onChange={(e) => setValue(e.target.value)}
      />
      {variant}
    </label>
  )
}

export default RadioButton
