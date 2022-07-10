import { LoginModel, SignUpModel } from '../models/auth/AuthModel'

export interface AuthRepository {
  login(user: string, password: string): Promise<LoginModel>
  signup(email: string, password: string, phone: string, school: string, rf: string, occupationArea: string): Promise<SignUpModel>
}
