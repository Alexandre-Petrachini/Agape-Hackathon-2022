import React, { createRef } from 'react'
import { render, waitFor } from '@testing-library/react'
import WarningModalComponent from './index'

interface CanOpenModal {
  openModal(): void
}

test('Appear modal when called', async () => {
  const childRef = createRef<CanOpenModal>()
  const myModal = render(
    <WarningModalComponent ref={childRef} description="description" />
  )
  await waitFor(() => {
    childRef.current?.openModal()
    expect(myModal.getByTestId('warning-modal-component')).toBeInTheDocument()
  })
})
