import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getCookie } from '../../../utils/utils'
import { RootState } from '../../redux/store'
import Login from '../pages/login'

export function redirectFromLogin() {
  const user = useSelector((state: RootState) => state.user.user)
  const isAuth = getCookie('token')
  if (isAuth) {
    if (!user.login) {
      return <Login />
    }
    return <Navigate to="/home" />
  }
  return <Login />
}
