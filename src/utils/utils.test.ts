import Cookies from 'js-cookie'
import { base64Encode, setCookie } from './utils'

it('should encode text in base64', () => {
  const text = 'Uma string qualquer com numeros 123'
  const returnedValue = base64Encode(text)
  expect(returnedValue).toBe('VW1hIHN0cmluZyBxdWFscXVlciBjb20gbnVtZXJvcyAxMjM=')
})

it('Should save value in Cookie', async () => {
  const key = 'someKey'
  const value = 'someValue'
  await setCookie(key, value)
  const cookieValue = await Cookies.get(key)
  expect(cookieValue).toBe('someValue')
})
