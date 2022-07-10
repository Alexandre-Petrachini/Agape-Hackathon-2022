import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, RenderResult } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../../redux/store'
import BackHeader from './index'

describe('Healthcare professional back header', () => {
  let rtl: RenderResult
  beforeEach(() => {
    rtl = render(
      <Router>
        <Provider store={store}>
          <BackHeader />
        </Provider>
      </Router>
    )
  })

  test('Can render day title', () => {
    const myTrigger = rtl.getByText('Amanhã')
    expect(myTrigger).toBeInTheDocument()
  })
})
