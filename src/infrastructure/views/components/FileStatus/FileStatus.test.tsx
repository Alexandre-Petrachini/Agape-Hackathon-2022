import React from 'react'
import { render } from '@testing-library/react'
import FileStatus from './index'

describe('FileStatus component', () => {
  it('Can render completed message', () => {
    const { getByText } = render(<FileStatus status="completed" />)
    expect(getByText('Arquivo enviado com sucesso!')).toBeInTheDocument()
  })

  it('Can render error message', () => {
    const { getByText } = render(<FileStatus status="error" />)
    expect(
      getByText('Erro ao processar arquivo. Por favor, tente novamente.')
    ).toBeInTheDocument()
  })

  it('Can render error with percent message', () => {
    const { getByText } = render(<FileStatus status="error" percentage={30} />)
    expect(getByText('Arquivo 30% processado')).toBeInTheDocument()
  })

  it('Can render error with percent message', () => {
    const { getByText } = render(<FileStatus status="loading" />)
    expect(getByText('Arquivo carregando')).toBeInTheDocument()
  })
})
