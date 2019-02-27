import React from 'react'
import PropTypes from 'prop-types'

const Input = React.memo(props => {
  const {
    label,
    type,
    placeholder,
    value,
    onChange,
  } = props

  return (
    <label>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  )
})

Input.defaultProps = {
  label: '',
  type: 'text',
  placeholder: ''
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Input
