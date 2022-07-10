import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../redux/store'
import { Home } from './index'

test('Renders Home page', () => {
  render(
    <Router>
      <Provider store={store}>
        <Home />
      </Provider>
    </Router>
  )
})
