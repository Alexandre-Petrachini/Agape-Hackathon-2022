import axios, { AxiosResponse } from 'axios'
import { EditProfileModel, LoginModel, SignUpModel } from '../../domain/models/auth/AuthModel'
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
      // TAKE DATA FROM API
      const loginModelInstance = new LoginModel(
        'token',
        'email',
        'password',
        'phone',
        'school',
        'rf',
        'occupationArea',
        200
      )
      return loginModelInstance

      throw new UnauthorizedError()
    } catch (err: any) {
      throw this.getError(err)
    }
  }

  public signup = async (
    email: string, password: string, phone: string, school: string, rf: string, occupationArea: string
  ): Promise<LoginModel> => {
    try {
      // TAKE DATA FROM API
      const loginModelInstance = new SignUpModel(
        'token',
        'email',
        'password',
        'phone',
        'school',
        'rf',
        'occupationArea',
        200
      )
      return loginModelInstance

      throw new UnauthorizedError()
    } catch (err: any) {
      throw this.getError(err)
    }
  }

  public editProfile = async (
    id: string
  ): Promise<EditProfileModel> => {
    try {
      // TAKE DATA FROM API
      const loginModelInstance = new EditProfileModel(
        'email',
        'password',
        'phone',
        'school',
        'rf',
        'occupationArea',
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
