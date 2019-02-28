import React from 'react'
import PropTypes from 'prop-types'

const CurrencyItem = React.memo(props => {
  const {

  } = props

  return (
    <div>
      <div>
        <div>
          <div>IDR</div>
          <div>140,000.00</div>
        </div>
        <div>IDR - Indonesian Rupiah</div>
        <div>1 USD = IDR 14,000.00</div>
      </div>
      <div>
        <button>-</button>
      </div>
    </div>
  )
})

CurrencyItem.defaultProps = {

}

CurrencyItem.propTypes = {

}

export default CurrencyItem
