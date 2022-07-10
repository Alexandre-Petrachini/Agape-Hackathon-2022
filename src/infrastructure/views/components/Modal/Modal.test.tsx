import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ModalComponent from './index'

test('Click and appear modal', () => {
  const { queryByTestId, getByTestId } = render(
    <ModalComponent
      trigger={<div data-testid="trigger">Click here</div>}
      title="Esqueceu usuário ou senha?"
      description="Entre em contato com o Help Desk no número *número*."
    />
  )
  const triggerElement = getByTestId('trigger')
  expect(queryByTestId('modal-component')).toBeNull()
  fireEvent.click(triggerElement)
  expect(queryByTestId('modal-component')).toBeInTheDocument()
})

test('Click button to close modal', () => {
  const { queryByTestId, getByTestId } = render(
    <ModalComponent
      trigger={<div data-testid="trigger">Click here</div>}
      title="Esqueceu usuário ou senha?"
      description="Entre em contato com o Help Desk no número *número*."
    />
  )
  const triggerElement = getByTestId('trigger')
  fireEvent.click(triggerElement)
  const modalCloseButton = getByTestId('button-component')
  expect(queryByTestId('modal-component')).toBeInTheDocument()
  fireEvent.click(modalCloseButton)
  expect(queryByTestId('modal-component')).toBeNull()
})
