import React from 'react'
import PropTypes from 'prop-types'

import Button from 'views/ui-kit/Button'

const CurrencyItem = React.memo(props => {
  const {
    currency,
    currencyValue,
    handleDeleteCurrency
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
        <Button onClick={handleDeleteCurrency(currency.id)}>
          -
        </Button>
      </div>
    </div>
  )
})

CurrencyItem.propTypes = {
  currency: PropTypes.objectOf(PropTypes.any).isRequired,
  currencyValue: PropTypes.number.isRequired,
  handleDeleteCurrency: PropTypes.func.isRequired
}

export default CurrencyItem
