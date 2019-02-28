import React from 'react'
import PropTypes from 'prop-types'

const CurrencyItem = React.memo(props => {
  const {
    currency,
    currencyValue
  } = props

  return (
    <div>
      <div>
        <div>
          <div>{currency.code}</div>
          <div>{currencyValue * currency.rates}</div>
        </div>
        <div>{`${currency.code} - ${currency.name}`}</div>
        <div>{`1 USD = ${currency.code} ${currency.rates}`}</div>
      </div>
      <div>
        <button>-</button>
      </div>
    </div>
  )
})

CurrencyItem.propTypes = {
  currency: PropTypes.objectOf(PropTypes.any).isRequired,
  currencyValue: PropTypes.number.isRequired
}

export default CurrencyItem
