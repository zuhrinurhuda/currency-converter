import { GET_CURRENCY_RATES } from './types'

const initialState = {
  currencyRates: {}
}

const currencyReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCY_RATES:
      return Object.assign({}, state, {
        currencyRates: action.payload
      })
    default:
      return state
  }
}

export default currencyReducers
