import React, { createRef } from 'react'
import {
  render,
  waitFor,
  RenderResult,
  fireEvent,
  screen,
} from '@testing-library/react'
import TwoOptionsModal from './index'

interface CanOpenModal {
  openModal(): void
}

describe('input file', () => {
  let myModal: RenderResult
  const childRef = createRef<CanOpenModal>()
  const onClickLeftButton = jest.fn()
  const onClickRightButton = jest.fn()
  beforeEach(() => {
    myModal = render(
      <TwoOptionsModal
        ref={childRef}
        title="Sair?"
        leftButton={{
          onClick: onClickLeftButton,
          text: 'Cancelar-button',
        }}
        rightButton={{
          onClick: onClickRightButton,
          text: 'Sair-button',
          style: { color: '#D63230' },
        }}
        description="Tem certeza deseja sair dessa conta?"
      />
    )
  })

  it('Can render modal', async () => {
    await waitFor(() => {
      childRef.current?.openModal()
      expect(
        myModal.getByTestId('two-options-modal-component')
      ).toBeInTheDocument()
    })
  })

  it('Can render buttons', async () => {
    await waitFor(() => {
      childRef.current?.openModal()
      const leftButton = myModal.getByText('Cancelar-button')
      const righttButton = myModal.getByText('Sair-button')
      expect(leftButton).toBeInTheDocument()
      expect(righttButton).toBeInTheDocument()
    })
  })

  it('Call function on click left button', async () => {
    await waitFor(() => {
      childRef.current?.openModal()
      const leftButton = screen.getByTestId('left-button')
      fireEvent.click(leftButton)
      expect(onClickLeftButton).toHaveBeenCalledTimes(1)
    })
  })

  it('Call function on click right button', async () => {
    await waitFor(() => {
      childRef.current?.openModal()
      const rightButton = screen.getByTestId('right-button')
      fireEvent.click(rightButton)
      expect(onClickRightButton).toHaveBeenCalledTimes(1)
    })
  })

  it('Dont call function on click left button', async () => {
    myModal = render(
      <TwoOptionsModal
        ref={childRef}
        title="Sair?"
        leftButton={{
          text: 'Cancelar-button',
        }}
        rightButton={{
          text: 'Sair-button',
          style: { color: '#D63230' },
        }}
        description="Tem certeza deseja sair dessa conta?"
      />
    )
    await waitFor(() => {
      childRef.current?.openModal()
      const leftButton = screen.getByTestId('left-button')
      fireEvent.click(leftButton)
      expect(onClickLeftButton).toHaveBeenCalledTimes(0)
    })
  })

  it('Dont call function on click right button', async () => {
    myModal = render(
      <TwoOptionsModal
        ref={childRef}
        title="Sair?"
        leftButton={{
          text: 'Cancelar-button',
        }}
        rightButton={{
          text: 'Sair-button',
          style: { color: '#D63230' },
        }}
        description="Tem certeza deseja sair dessa conta?"
      />
    )
    await waitFor(() => {
      childRef.current?.openModal()
      const rightButton = screen.getByTestId('right-button')
      fireEvent.click(rightButton)
      expect(onClickRightButton).toHaveBeenCalledTimes(0)
    })
  })
})
