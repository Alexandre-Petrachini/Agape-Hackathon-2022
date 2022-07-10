import { AuthRepository } from '../ports/AuthRepository'
import AuthRepositoryImpl from '../../infrastructure/repositories/AuthRepositoryImpl'
import { LoginModel } from '../models/auth/AuthModel'
import { setCookie } from '../../utils/utils'

export class Auth {
  repository: AuthRepository

  constructor() {
    this.repository = new AuthRepositoryImpl()
  }

  async login(user: string, password: string): Promise<LoginModel> {
    const repositoryResponse = await this.repository.login(user, password)
    await setCookie('token', repositoryResponse.token)
    return repositoryResponse
  }
}
