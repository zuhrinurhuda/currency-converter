import config from 'config'

/**
 * Fetch resources asynchronously across the network
 * @param {string} path - Endpoint path
 * @param {string} method - HTTP request method
 * @param {object} data - HTTP request body
 * @param {object} headers - HTTP request headers
 */
const fetchApi = (path, method = 'GET', data = null, headers = {}) => {
  const url = `${config.api.url}${path}`
  const options = {
    method,
    body: method !== 'GET' ? JSON.stringify(data) : null,
    headers
  }

  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // handle endpoint that returns data although an error occurs
        if (Object.keys(data).includes('error')) {
          reject(data)
        }
        resolve(data)
      })
      .catch(error => reject(error))
  })
}

export default fetchApi
