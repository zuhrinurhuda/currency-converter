import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Card = React.memo(props => {
  const {
    title,
    meta,
    children
  } = props

  return (
    <div className="card">
      <div className="card__title">
        {title}
      </div>
      <div className="card__meta">
        {meta}
      </div>
      {children}
    </div>
  )
})

Card.defaultProps = {
  title: '',
  meta: null,
  children: null
}

Card.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.any,
  children: PropTypes.any
}

export default Card
