import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Card from 'views/ui-kit/Card'
import Input from 'views/ui-kit/Input'
import Button from 'views/ui-kit/Button'
import { fetchCurrencyRates } from 'state/redux/currency/actions'

import CurrencyItem from './Components/CurrencyItem'
import AddCurrency from './Components/AddCurrency'
import currencyOption from './Utils/currencyOption'

class Currency extends PureComponent {
  static propTypes = {
    getCurrencyRates: PropTypes.func.isRequired,
    currencyRates: PropTypes.objectOf(PropTypes.any)
  }
  
  static defaultProps = {
    currencyRates: {}
  }

  constructor(props) {
    super(props)

    this.state = {
      baseCurrency: {
        code: 'USD',
        name: 'United States dollar'
      },
      currencyValue: 10.00,
      isAddCurrencyOpen: false,
      selectedCurrency: currencyOption[0].code,
      currencyList: [],
      currencyRates: {}
    }
  }

  componentDidMount() {
    const { getCurrencyRates } = this.props
    const { baseCurrency } = this.state

    getCurrencyRates(baseCurrency.code)
  }

  static getDerivedStateFromProps(props, state) {
    if (JSON.stringify(state.currencyRates) !== JSON.stringify(props.currencyRates)) {
      return {
        currencyRates: props.currencyRates
      }
    }
    return null
  }

  /**
   * Handle changes in currency value
   * @param {number} value - The currency value
   */
  handleValueChange = ({ target: { value }}) => {
    this.setState({ currencyValue: Number(value) })
  }

  /**
   * Handle displays the add currency button
   */
  handleShowAddCurrency = () => {
    this.setState({ isAddCurrencyOpen: true })
  }

  /**
   * Handle choose currency from select option
   * @param {string} value - The currency option id
   */
  handleSelectChange = ({ target: { value } }) => {
    this.setState({ selectedCurrency: value })
  }

  /**
   * Handle add currency options
   */
  handleAddCurrency = () => {
    const { selectedCurrency, currencyRates } = this.state
    const currency = currencyOption.find(currency => currency.code === selectedCurrency)

    this.setState(prevState => ({
      currencyList: [
        ...prevState.currencyList,
        {
          id: prevState.currencyList.length + 1,
          code: currency.code,
          name: currency.name,
          rates: currencyRates[selectedCurrency]
        }
      ]
    }))
  }

  /**
   * Handle delete currency options
   * @param {string} selectedId - The currency id that will be deleted
   */
  handleDeleteCurrency = selectedId => () => {
    const { currencyList } = this.state
    const filteredCurrencyList = currencyList.filter(currency => currency.id !== selectedId)

    this.setState({ currencyList: filteredCurrencyList })
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
              handleDeleteCurrency={this.handleDeleteCurrency}
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

const mapStateTopProps = state => ({
  currencyRates: state.currency.currencyRates
})

const mapDispatchToProps = dispatch => ({
  getCurrencyRates: base => dispatch(fetchCurrencyRates(base))
})

export default connect(mapStateTopProps, mapDispatchToProps)(Currency)
