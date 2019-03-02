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
        valueKey="code"
        nameKey="code"
      />
      <Button onClick={handleAddCurrency}>
        Add
      </Button>
    </div>
  )
})

AddCurrency.propTypes = {
  selectedCurrency: PropTypes.string.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  currencyOption: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAddCurrency: PropTypes.func.isRequired
}

export default AddCurrency
