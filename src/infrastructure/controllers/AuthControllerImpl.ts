import store from '../redux/store'
import { setUser } from '../redux/user/userSlice'
import { LoginModel, SignUpModel } from '../../domain/models/auth/AuthModel'
import { ErrorModel } from './models/ErrorModel'
import { UnauthorizedError } from '../repositories/errors/auth/UnauthorizedError'

import { Auth } from '../../domain/useCases/AuthUseCases'
import { base64Encode } from '../../utils/utils'
import { AuthController } from './ports/AuthController'

export default class AuthControllerImpl implements AuthController {
  public async login(
    login: string,
    password: string
  ): Promise<LoginModel | ErrorModel> {
    try {
      const auth = new Auth()
      const userBase64 = base64Encode(login)
      const passwordBase64 = base64Encode(password)
      const loginEncoded = await auth.login(userBase64, passwordBase64)
      store.dispatch(
        setUser({
          email: 'email',
          phone: 'phone',
          school: 'school',
          rf: 'rf',
          occupationArea: 'occupationArea'
        })
      )
      return loginEncoded
    } catch (e) {
      if (e instanceof UnauthorizedError) {
        return new ErrorModel('Sem autorização')
      }
      return new ErrorModel('Error')
    }
  }

  public async signup(
    email: string, password: string, phone: string, school: string, rf: string, occupationArea: string
  ): Promise<SignUpModel | ErrorModel> {
    try {
      const auth = new Auth()
      const loginEncoded = await auth.signup(email, password, phone, school, rf, occupationArea)
      store.dispatch(
        setUser({
          email: 'email',
          phone: 'phone',
          school: 'school',
          rf: 'rf',
          occupationArea: 'occupationArea'
        })
      )
      return loginEncoded
    } catch (e) {
      if (e instanceof UnauthorizedError) {
        return new ErrorModel('Sem autorização')
      }
      return new ErrorModel('Error')
    }
  }
}
