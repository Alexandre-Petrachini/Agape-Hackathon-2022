import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen, fireEvent, RenderResult } from '@testing-library/react'
import { Provider } from 'react-redux'
import Header from './index'
import store from '../../../redux/store'

describe('input file', () => {
  let rtl: RenderResult
  beforeEach(() => {
    rtl = render(
      <Router>
        <Provider store={store}>
          <Header userLogin="cit.login" />
        </Provider>
      </Router>
    )
  })

  test('Can render login', () => {
    const myTrigger = rtl.getByText('Olá, cit.login')
    expect(myTrigger).toBeInTheDocument()
  })

  test('Can render logout', () => {
    const myTrigger = rtl.getByText('SAIR')
    expect(myTrigger).toBeInTheDocument()
  })

  test('Can render modal when click logout', () => {
    const myTrigger = rtl.getByText('SAIR')
    fireEvent.click(myTrigger)
    const myModal = screen.getByTestId('two-options-modal-component')
    expect(myModal).toBeInTheDocument()
  })
})
