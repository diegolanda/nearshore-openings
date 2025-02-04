import React from 'react'

const InputField = (props) => {
  //Checks if all the fields are filled and if an @ sign is used in the email field
  const validateInput = (values) => {
    if (values.some((f) => f === '') || values[0].indexOf('@') === -1) {
      return true
    } else {
      return false
    }
  }
  if (props.type === 'submit') {
    return (
      <input
        type="submit"
        value={props.label}
        disabled={validateInput(props.formValues)}
      />
    )
  } else if (props.type === 'textarea') {
    return (
      <label>
        {props.label}
        <textarea
          onChange={(e) => props.onChangeHandler(e.target.value)}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          rows={7}
          name={props.name}
        />
      </label>
    )
  } else {
    return (
      <label>
        {props.label}
        <input
          onChange={(e) => props.onChangeHandler(e.target.value)}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          name={props.name}
          className="border rounded leading-tight focus:ring-1 focus:outline-none focus:border-green-600 focus:ring-green-600 focus:border-transparent"
        />
      </label>
      
    )
  }
}

export default React.memo(InputField)
