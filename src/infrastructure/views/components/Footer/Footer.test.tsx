import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Footer from './index'

test('Renders footer logo', () => {
  const { getByTestId } = render(<Footer />)
  expect(getByTestId('image')).toBeInTheDocument()
})
