import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Input from './index'

test('Renders input label', () => {
  render(
    <Input
      id="user"
      label="Usuário"
      error=""
      onChange={() => null}
      maxLength={64}
    />
  )

  const divElement = screen.getByTestId('input-component')
  expect(divElement).toHaveTextContent('Usuário')
})

test('Change icon on click show password', () => {
  const { getByTestId } = render(
    <Input
      id="user"
      label="Usuário"
      error=""
      onChange={() => null}
      maxLength={256}
      isPassword
    />
  )
  const iconShow = getByTestId('BsFillEyeFill')
  expect(getByTestId('BsFillEyeFill')).toBeInTheDocument()
  fireEvent.click(iconShow)
  expect(getByTestId('BsFillEyeSlashFill')).toBeInTheDocument()
})

test('Change icon on click hide password', () => {
  const { getByTestId } = render(
    <Input
      id="user"
      label="Usuário"
      error=""
      onChange={() => null}
      isPassword
    />
  )
  const iconShow = getByTestId('BsFillEyeFill')
  expect(getByTestId('BsFillEyeFill')).toBeInTheDocument()
  fireEvent.click(iconShow)
  expect(getByTestId('BsFillEyeSlashFill')).toBeInTheDocument()
  const iconHide = getByTestId('BsFillEyeSlashFill')
  fireEvent.click(iconHide)
  expect(getByTestId('BsFillEyeFill')).toBeInTheDocument()
})

test('Write on input', () => {
  const { getByTestId } = render(
    <Input
      id="user"
      label="Usuário"
      error=""
      onChange={() => null}
      maxLength={64}
    />
  )
  const searchInput = getByTestId('input') as HTMLInputElement
  fireEvent.change(searchInput, { target: { value: 'test' } })
  expect(searchInput.value).toBe('test')
})

test('Render input error', () => {
  const { getByText } = render(
    <Input
      id="user"
      label="Usuário"
      error="Some error here"
      onChange={() => null}
    />
  )
  const errorMessage = getByText('Some error here')
  expect(errorMessage).toBeInTheDocument()
})
