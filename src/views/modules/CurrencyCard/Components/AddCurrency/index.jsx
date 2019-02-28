import React from 'react'
import PropTypes from 'prop-types'

import Button from 'views/ui-kit/Button'
import Select from 'views/ui-kit/Select'

const AddCurrency = React.memo(props => {
  const {
    selectedCurrency,
    handleSelectChange,
    currencyOption,
    handleAddCurrency
  } = props

  return (
    <div>
      <Select
        value={selectedCurrency}
        onChange={handleSelectChange}
        options={currencyOption}
      />
      <Button onClick={handleAddCurrency}>
        Add
      </Button>
    </div>
  )
})

AddCurrency.defaultProps = {

}

AddCurrency.propTypes = {

}

export default AddCurrency
