import axios, { AxiosResponse } from 'axios'
import { EditProfileModel, LoginModel, SignUpModel } from '../../domain/models/auth/AuthModel'
import { ResponseModel } from './models/ResponseModel'
import { UnauthorizedError } from './errors/auth/UnauthorizedError'
import { APIError } from './errors/APIError'
import { WorkshopRepository } from '../../domain/ports/WorkshopRepository'
import { WorkshopModel } from '../../domain/models/workshop/WorkshopModel'

export default class WorkshopRepositoryImpl implements WorkshopRepository {
  public createWorkshop = async (
    name: string, areaOfVolunteerWork: string, local: string, period: string, description: string
  ): Promise<void> => {
    try {
      // CREATE DATA ON API
    } catch (err: any) {
      throw this.getError(err)
    }
  }

  public editWorkshop = async (
    id: string
  ): Promise<void> => {
    try {
      // EDIT DATA ON API
    } catch (err: any) {
      throw this.getError(err)
    }
  }

  public deleteWorkshop = async (
    id: string
  ): Promise<void> => {
    try {
      // EDIT DATA ON API
    } catch (err: any) {
      throw this.getError(err)
    }
  }

  public getMyWorkshops = async (
    id: string
  ): Promise<WorkshopModel[]> => {
    try {
      // EDIT DATA ON API
      const workshops: WorkshopModel[] = [{ name: 'workshop name', areaOfVolunteerWork: 'areaOfVolunteerWork', local: 'local', period: 'period', description: 'description' }]
      return workshops
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
