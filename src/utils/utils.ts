import { Buffer } from 'buffer'
import Cookies from 'js-cookie'

export const base64Encode = (text: string): string => {
  return Buffer.from(text).toString('base64')
}

export const setCookie = async (key: string, value: string): Promise<void> => {
  await Cookies.set(key, value)
}

export const getCookie = (key: string): string | undefined => {
  const value = Cookies.get(key)
  return value
}

export const clearCookie = (key: string) => {
  Cookies.remove(key)
}
