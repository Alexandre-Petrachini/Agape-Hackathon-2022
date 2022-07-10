import axios, { AxiosResponse } from 'axios'
import { LoginModel } from '../../domain/models/auth/AuthModel'
import { ResponseModel } from './models/ResponseModel'
import { UnauthorizedError } from './errors/auth/UnauthorizedError'
import { APIError } from './errors/APIError'
import { AuthRepository } from '../../domain/ports/AuthRepository'

export default class AuthRepositoryImpl implements AuthRepository {
  public login = async (
    user: string,
    password: string
  ): Promise<LoginModel> => {
    try {
      // const { data }: AxiosResponse<ResponseModel<LoginModel>> = await axios({
      //   method: 'post',
      //   url: 'http://localhost:8080/login',
      //   data: {
      //     login: user,
      //     password,
      //   },
      // })
      // const responseBody = data
      // if (responseBody.data) {
      //   const loginModelInstance = new LoginModel(
      //     responseBody.data.token,
      //     responseBody.data.login,
      //     responseBody.data.isAdmin,
      //     responseBody.status
      //   )
      //   return loginModelInstance
      // }

      const loginModelInstance = new LoginModel(
        'token',
        'login',
        true,
        200
      )
      return loginModelInstance

      throw new UnauthorizedError()
    } catch (err: any) {
      throw this.getError(err)
    }
  }

  private getError(err: any) {
    let error: APIError
    switch (err.response.status) {
      case 401: {
        error = new UnauthorizedError()
        break
      }
      default: {
        error = new APIError()
        break
      }
    }
    return error
  }
}
