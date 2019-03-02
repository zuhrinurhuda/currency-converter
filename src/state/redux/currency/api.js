import fetch from 'state/utils/fetch'

/**
 * Get currency rates based on currency base
 * @param {string} base - Currency base
 */
export const getCurrencyRates = base => fetch(`/latest?base=${base}`)
