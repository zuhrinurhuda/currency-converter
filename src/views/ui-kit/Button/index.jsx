import React from 'react'
import PropTypes from 'prop-types'

const Button = React.memo(props => {
  const {
    className,
    type,
    onClick,
    children
  } = props

  return (
    <button
      className={`btn ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
})

Button.defaultProps = {
  className: '',
  type: 'button'
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
}

export default Button
