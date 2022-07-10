
import { EditProfileModel, LoginModel, SignUpModel } from '../../../domain/models/auth/AuthModel'
import { ErrorModel } from '../models/ErrorModel'

export interface AuthController {
  login(email: string, password: string): Promise<LoginModel | ErrorModel>
  signup(email: string, password: string, phone: string, school: string, rf: string, occupationArea: string): Promise<SignUpModel | ErrorModel>
  editProfile(id: string): Promise<EditProfileModel | ErrorModel>
}
