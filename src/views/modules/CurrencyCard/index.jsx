import React, { PureComponent } from 'react'

import Card from 'views/ui-kit/Card'
import Input from 'views/ui-kit/Input'

class CurrencyCard extends PureComponent {
  constructor() {
    super()

    this.state = {
      currencyValue: 10.00
    }
  }

  /**
   * Handle changes in currency value
   * @param {number} value - The value of the currency
   */
  handleValueChange = ({ target: { value }}) => {
    this.setState({ currencyValue: value })
  }

  render () {
    const {
      currencyValue
    } = this.state

    return (
      <Card
        title="USD - United States Dollar"
        meta={
          <Input
            label="USD"
            type="number"
            placeholder="Enter the value of currency"
            value={currencyValue}
            onChange={this.handleValueChange}
          />
        }
      >
      </Card>
    )
  }
}

export default CurrencyCard
