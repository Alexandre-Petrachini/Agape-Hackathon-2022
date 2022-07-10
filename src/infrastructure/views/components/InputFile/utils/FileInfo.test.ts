import { FileInfo } from './FileInfo'

describe('input file', () => {
  let fakeFile: File
  let myFile: FileInfo
  beforeEach(async () => {
    fakeFile = new File(['hello'], 'hello.csv', { type: 'text/csv' })
    myFile = new FileInfo(fakeFile, await FileInfo.initBase64(fakeFile))
  })

  test('Can get name file', () => {
    expect(myFile.getName()).toBe('hello.csv')
  })

  test('Can get size file', () => {
    expect(myFile.getSize()).toBe(5)
  })

  test('Can get base64 file', () => {
    expect(myFile.getBase64()).toBe('data:text/csv;base64,aGVsbG8=')
  })
})
