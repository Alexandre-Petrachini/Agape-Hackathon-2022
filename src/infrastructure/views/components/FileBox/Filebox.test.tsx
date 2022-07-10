import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import FileBox from './index'

describe('Filebox component', () => {
  it('Can render name', () => {
    const { getByText } = render(
      <FileBox name="Planilha.csv" onClose={() => null} onReload={() => null} />
    )
    expect(getByText('Planilha.csv')).toBeInTheDocument()
  })

  it('Can render reload container', () => {
    const { getByTestId } = render(
      <FileBox
        name="Planilha.csv"
        onClose={() => null}
        onReload={() => null}
        fail
      />
    )
    expect(getByTestId('reload-container')).toBeInTheDocument()
  })

  it('Can render completed message', () => {
    const { getByTestId } = render(
      <FileBox
        name="Planilha.csv"
        onClose={() => null}
        onReload={() => null}
        completed
      />
    )
    expect(getByTestId('completed-message')).toBeInTheDocument()
  })

  it('Can call onClose function', () => {
    const onClose = jest.fn()
    const { getByTestId } = render(
      <FileBox name="Planilha.csv" onClose={onClose} onReload={() => null} />
    )
    const closeButton = getByTestId('close-button')
    fireEvent.click(closeButton)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('Can call onReload function', () => {
    const onReload = jest.fn()
    const { getByTestId } = render(
      <FileBox
        name="Planilha.csv"
        onClose={() => null}
        onReload={onReload}
        fail
      />
    )
    const closeButton = getByTestId('reload-button')
    fireEvent.click(closeButton)
    expect(onReload).toHaveBeenCalledTimes(1)
  })
})
