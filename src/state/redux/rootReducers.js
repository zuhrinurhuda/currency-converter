import { combineReducers } from 'redux'

import currencyReducers from './currency/reducers'

/**
 * Combine the reducer into one object
 */
const rootReducers = combineReducers({
  currency: currencyReducers
})

export default rootReducers
