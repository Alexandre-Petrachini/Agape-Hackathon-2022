import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Checkbox from './index'

test('Renders checkbox label', () => {
  render(
    <Checkbox
      checked
      onClick={() => null}
      label="Lembrar de mim"
      checkboxStyle={{ color: '#009EDB' }}
      labelStyle={{ color: '#595959' }}
    />
  )

  const divElement = screen.getByTestId('checkbox-component')
  expect(divElement).toHaveTextContent('Lembrar de mim')
})

test('Does not render checkbox label', () => {
  const { queryByTestId } = render(
    <Checkbox
      checked
      onClick={() => null}
      checkboxStyle={{ color: '#009EDB' }}
      labelStyle={{ color: '#595959' }}
    />
  )

  const labelElement = queryByTestId('checkbox-label')
  expect(labelElement).toBeNull()
})

test('Check checkbox click', () => {
  const onClick = jest.fn()
  render(
    <Checkbox
      checked
      onClick={onClick}
      label="Lembrar de mim"
      checkboxStyle={{ color: '#009EDB' }}
      labelStyle={{ color: '#595959' }}
    />
  )
  const divElement = screen.getByTestId('checkbox-component')
  expect(divElement).toHaveAttribute('id', 'checkbox-component')
  fireEvent.click(divElement)
  expect(onClick).toHaveBeenCalledTimes(1)
})
