import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InputFile from './index'

describe('input file', () => {
  let rtl: RenderResult
  beforeEach(() => {
    rtl = render(
      <InputFile
        id="1"
        trigger={<div data-testid="buttonInput">Click</div>}
        callback={() => null}
      />
    )
  })

  test('Can render trigger', () => {
    const myTrigger = rtl.getByTestId('buttonInput')
    expect(myTrigger).toBeInTheDocument()
  })

  test('Can upload a file', () => {
    const fakeFile = new File(['hello'], 'hello.csv', { type: 'text/csv' })
    const inputFile = rtl.getByTestId('fileInput') as HTMLInputElement
    userEvent.upload(inputFile, fakeFile)
    const files = inputFile?.files
    expect(files ? files[0] : null).toStrictEqual(fakeFile)
  })
})
