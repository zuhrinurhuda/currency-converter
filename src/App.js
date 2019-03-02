import React from 'react'
import { Provider } from 'react-redux'

import store from 'state/store'
import Home from 'views/pages/Home'

import './App.css'

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

export default App
