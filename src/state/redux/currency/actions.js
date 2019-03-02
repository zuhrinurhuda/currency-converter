import { GET_CURRENCY_RATES } from './types'
import { getCurrencyRates } from './api'

/**
 * Network request for get currency rates
 * @param {string} base - Currency base
 */
export const fetchCurrencyRates = base => dispatch => {
  getCurrencyRates(base)
    .then(({ rates }) => dispatch(setCurrencyRates(rates)))
    .catch(({ error }) => alert(error))
}

/**
 * Set currency rates into redux store
 * @param {object} currencyRates - List of currency rates
 */
const setCurrencyRates = currencyRates => ({
  type: GET_CURRENCY_RATES,
  payload: currencyRates
})
