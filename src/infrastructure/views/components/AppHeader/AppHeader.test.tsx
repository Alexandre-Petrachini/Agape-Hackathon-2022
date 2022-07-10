import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, RenderResult } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../../redux/store'
import AppHeader from './index'

describe('Healthcare professional app header', () => {
  let rtl: RenderResult
  beforeEach(() => {
    rtl = render(
      <Router>
        <Provider store={store}>
          <AppHeader userLogin="cit.login" />
        </Provider>
      </Router>
    )
  })

  test('Can render login user name', () => {
    const myTrigger = rtl.getByText('Olá, cit.login')
    expect(myTrigger).toBeInTheDocument()
  })
})
