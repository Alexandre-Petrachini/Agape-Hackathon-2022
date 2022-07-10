import store from '../redux/store'
import { setUser } from '../redux/user/userSlice'
import { EditProfileModel, LoginModel, SignUpModel } from '../../domain/models/auth/AuthModel'
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
      const response = await auth.login(login, password)
      store.dispatch(
        setUser({
          email: 'email',
          phone: 'phone',
          school: 'school',
          rf: 'rf',
          occupationArea: 'occupationArea'
        })
      )
      return response
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
      const response = await auth.signup(email, password, phone, school, rf, occupationArea)
      store.dispatch(
        setUser({
          email: 'email',
          phone: 'phone',
          school: 'school',
          rf: 'rf',
          occupationArea: 'occupationArea'
        })
      )
      return response
    } catch (e) {
      if (e instanceof UnauthorizedError) {
        return new ErrorModel('Sem autorização')
      }
      return new ErrorModel('Error')
    }
  }

  public async editProfile(
    id: string
  ): Promise<EditProfileModel | ErrorModel> {
    try {
      const auth = new Auth()
      const response = await auth.editProfile(id)
      store.dispatch(
        setUser({
          email: 'email',
          phone: 'phone',
          school: 'school',
          rf: 'rf',
          occupationArea: 'occupationArea'
        })
      )
      return response
    } catch (e) {
      if (e instanceof UnauthorizedError) {
        return new ErrorModel('Sem autorização')
      }
      return new ErrorModel('Error')
    }
  }
}
