import axios, { AxiosResponse } from 'axios'
import { EditProfileModel, LoginModel, SignUpModel } from '../../domain/models/auth/AuthModel'
import { ResponseModel } from './models/ResponseModel'
import { UnauthorizedError } from './errors/auth/UnauthorizedError'
import { APIError } from './errors/APIError'
import { WorkshopRepository } from '../../domain/ports/WorkshopRepository'
import { WorkshopModel } from '../../domain/models/workshop/WorkshopModel'
import { VoluntaryModel } from '../../domain/models/voluntary/WorkshopModel'
import { VoluntaryRepository } from '../../domain/ports/VoluntaryRepository'

export default class VoluntaryRepositoryImpl implements VoluntaryRepository {
  public getWorkshopVoluntaries = async (
    id: string
  ): Promise<VoluntaryModel[]> => {
    try {
        // CREATE DATA ON API
        const voluntaries: VoluntaryModel[] = [{ name: 'voluntary name', email: 'email', phone: 'phone', description: 'description', linkedin: 'linkedin' }]
        return voluntaries
    } catch (err: any) {
      throw this.getError(err)
    }
  }

  public findVoluntary = async (
    id: string, search?: string
  ): Promise<VoluntaryModel[]> => {
    try {
        // CREATE DATA ON API
        const voluntaries: VoluntaryModel[] = [{ name: 'voluntary name', email: 'email', phone: 'phone', description: 'description', linkedin: 'linkedin' }]
        return voluntaries
    } catch (err: any) {
      throw this.getError(err)
    }
  }

  public getVoluntary = async (
    id: string, search?: string
  ): Promise<VoluntaryModel> => {
    try {
        // CREATE DATA ON API
        const voluntary: VoluntaryModel = { name: 'voluntary name', email: 'email', phone: 'phone', description: 'description', linkedin: 'linkedin' }
        return voluntary
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
