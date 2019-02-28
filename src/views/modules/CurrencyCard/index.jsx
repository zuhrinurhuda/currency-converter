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
        code: 'USD',
        name: 'United States dollar'
      },
      currencyValue: 10.00,
      isAddCurrencyOpen: false,
      selectedCurrency: currencyOption[0].code,
      currencyList: [{
        id: 1,
        code: 'IDR',
        name: 'Indonesian rupiah',
        rates: 14000
      }],
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

  /**
   * Hanle add currency options
   */
  handleAddCurrency = () => {
    const { selectedCurrency } = this.state
    const currency = currencyOption.find(currency => currency.code === selectedCurrency)

    this.setState(prevState => ({
      currencyList: [
        ...prevState.currencyList,
        {
          id: prevState.currencyList.length + 1,
          code: currency.code,
          name: currency.name,
          rates: 14000
        }
      ]
    }))
  }

  render () {
    const {
      baseCurrency,
      currencyValue,
      isAddCurrencyOpen,
      selectedCurrency,
      currencyList
    } = this.state

    return (
      <Card
        title={`${baseCurrency.code} - ${baseCurrency.name}`}
        meta={
          <Input
            label={`${baseCurrency.code}`}
            type="number"
            placeholder="Enter the value of currency"
            value={currencyValue}
            onChange={this.handleValueChange}
          />
        }
      >
        {currencyList.length !== 0 && (
          currencyList.map((currency, index) => (
            <CurrencyItem
              key={index + 1}
              currency={currency}
              currencyValue={currencyValue}
            />
          ))
        )}
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
