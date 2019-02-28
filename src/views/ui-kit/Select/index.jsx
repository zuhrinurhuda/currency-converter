import React from 'react'
import PropTypes from 'prop-types'

const Select = React.memo(props => {
  const {
    value,
    onChange,
    options,
    valueKey,
    nameKey
  } = props

  return (
    <select value={value} onChange={onChange}>
      {options.map((item, index) => (
        <option key={index + 1} value={item[valueKey]}>
          {item[nameKey]}
        </option>
      ))}
    </select>
  )
})

Select.defaultProps = {
  value: '',
  options: [],
  valueKey: 'value',
  nameKey: 'name'
}

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  valueKey: PropTypes.string,
  nameKey: PropTypes.string
}

export default Select
