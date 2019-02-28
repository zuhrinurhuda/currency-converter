import React, { PureComponent } from 'react'

import Card from 'views/ui-kit/Card'
import Input from 'views/ui-kit/Input'
import Button from 'views/ui-kit/Button'

import CurrencyItem from './Components/CurrencyItem'
import AddCurrency from './Components/AddCurrency'
import currencyOption from './Utils/currencyOption'

class CurrencyCard extends PureComponent {
  constructor() {
    super()

    this.state = {
      baseCurrency: {
        id: 'USD',
        name: 'United States dollar'
      },
      currencyValue: 10.00,
      isAddCurrencyOpen: false,
      selectedCurrency: currencyOption[0].id,
      currencyList: [],
    }
  }

  /**
   * Handle changes in currency value
   * @param {number} value - The value of the currency
   */
  handleValueChange = ({ target: { value }}) => {
    this.setState({ currencyValue: value })
  }

  /**
   * Handle displays the add currency button
   */
  handleShowAddCurrency = () => {
    this.setState({ isAddCurrencyOpen: true })
  }

  /**
   * Handle choose currency from select option
   * @param {string} value - The id of the currency
   */
  handleSelectChange = ({ target: { value } }) => {
    this.setState({ selectedCurrency: value })
  }

  handleAddCurrency = () => {

  }

  render () {
    const {
      baseCurrency,
      currencyValue,
      isAddCurrencyOpen,
      selectedCurrency
    } = this.state

    return (
      <Card
        title={`${baseCurrency.id} - ${baseCurrency.name}`}
        meta={
          <Input
            label={`${baseCurrency.id}`}
            type="number"
            placeholder="Enter the value of currency"
            value={currencyValue}
            onChange={this.handleValueChange}
          />
        }
      >
        <CurrencyItem />
        {isAddCurrencyOpen && (
          <AddCurrency
            selectedCurrency={selectedCurrency}
            handleSelectChange={this.handleSelectChange}
            currencyOption={currencyOption}
            handleAddCurrency={this.handleAddCurrency}
          />
        )}
        <Button onClick={this.handleShowAddCurrency}>
          Add More Currencies
        </Button>
      </Card>
    )
  }
}

export default CurrencyCard
