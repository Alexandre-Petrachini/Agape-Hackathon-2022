
import { LoginModel, SignUpModel } from '../../../domain/models/auth/AuthModel'
import { ErrorModel } from '../models/ErrorModel'

export interface AuthController {
  login(email: string, password: string): Promise<LoginModel | ErrorModel>
  signup(email: string, password: string, school: string, rf: string): Promise<SignUpModel | ErrorModel>
}
