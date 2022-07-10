import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Login from './index'

test('Renders Login page', () => {
  render(
    <Router>
      <Login />
    </Router>
  )

  const divElement = screen.getByRole('contentinfo')
  expect(divElement).toHaveTextContent('Senha')
})
