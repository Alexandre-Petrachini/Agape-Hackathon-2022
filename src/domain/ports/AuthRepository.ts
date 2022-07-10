import { LoginModel } from '../models/auth/AuthModel'

export interface AuthRepository {
  login(user: string, password: string): Promise<LoginModel>
}
