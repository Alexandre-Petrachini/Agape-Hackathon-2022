import React, { useState, useRef, useEffect } from 'react'
import { LoginModel } from '../../../../domain/models/auth/AuthModel'
import { ErrorModel } from '../../../controllers/models/ErrorModel'
import './styles.scss'
import AuthControllerImpl from '../../../controllers/AuthControllerImpl'
import { AuthController } from '../../../controllers/ports/AuthController'
const authController: AuthController = new AuthControllerImpl()

function Login() {
  const onSubmit = async () => {
    const login = await authController.login('', '')
  }

  return (
   <div>Login page</div>
  )
}

export default Login
