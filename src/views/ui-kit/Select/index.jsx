import React from 'react'
import PropTypes from 'prop-types'

const Select = React.memo(props => {
  const {
    value,
    onChange,
    options
  } = props

  return (
    <select value={value} onChange={onChange}>
      {options.map(item => (
        <option key={item.id} value={item.id}>
          {item.id}
        </option>
      ))}
    </select>
  )
})

Select.defaultProps = {
  value: '',
  options: []
}

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object)
}

export default Select
