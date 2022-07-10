import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { IoIosInformationCircle } from 'react-icons/io'
import Button from './index'

test('Renders button text', () => {
  render(<Button type="button" text="Click here" onClick={() => null} />)
  const divElement = screen.getByTestId('button-component')
  expect(divElement).toHaveTextContent('Click here')
  expect(divElement).toHaveAttribute('id', 'button-component')
})

test('Renders button icon', () => {
  const { getByTestId } = render(
    <Button
      text="Click here"
      type="button"
      icon={<IoIosInformationCircle data-testid="io-ios-icon" />}
      onClick={() => null}
    />
  )
  expect(getByTestId('io-ios-icon')).toBeInTheDocument()
})

test('Click button', () => {
  const onClick = jest.fn()
  render(<Button text="Jack" type="button" onClick={onClick} />)
  const divElement = screen.getByTestId('button-component')
  expect(divElement).toHaveAttribute('id', 'button-component')
  fireEvent.click(divElement)
  expect(onClick).toHaveBeenCalledTimes(1)
})

test('Loading on button', () => {
  const { getByTestId } = render(
    <Button text="Jack" type="button" loading onClick={() => null} />
  )
  const loadingDiv = getByTestId('button-loading')
  expect(loadingDiv).toBeInTheDocument()
})
