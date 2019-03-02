import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/rootReducers'

/**
 * Create redux store
 */
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store