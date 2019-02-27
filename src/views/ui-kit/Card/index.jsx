import React from 'react'

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

export default Card
