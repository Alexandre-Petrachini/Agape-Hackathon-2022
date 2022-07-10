import { AuthRepository } from '../ports/AuthRepository'
import AuthRepositoryImpl from '../../infrastructure/repositories/AuthRepositoryImpl'
import { EditProfileModel, LoginModel, SignUpModel } from '../models/auth/AuthModel'
import { setCookie } from '../../utils/utils'

export class Auth {
  repository: AuthRepository

  constructor() {
    this.repository = new AuthRepositoryImpl()
  }

  async login(user: string, password: string): Promise<LoginModel> {
    const repositoryResponse = await this.repository.login(user, password)
    // await setCookie('token', repositoryResponse.token)
    return repositoryResponse
  }

  async signup(email: string, password: string, phone: string, school: string, rf: string, occupationArea: string): Promise<SignUpModel> {
    const repositoryResponse = await this.repository.signup(email, password, phone, school, rf, occupationArea)
    // await setCookie('token', repositoryResponse.token)
    return repositoryResponse
  }

  async editProfile(id: string): Promise<EditProfileModel> {
    const repositoryResponse = await this.repository.editProfile(id)
    return repositoryResponse
  }
}
