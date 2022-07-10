import store from '../redux/store'
import { setUser } from '../redux/user/userSlice'
import { EditProfileModel, LoginModel, SignUpModel } from '../../domain/models/auth/AuthModel'
import { ErrorModel } from './models/ErrorModel'
import { UnauthorizedError } from '../repositories/errors/auth/UnauthorizedError'

import { Auth } from '../../domain/useCases/AuthUseCases'
import { Workshop } from '../../domain/useCases/WorkshopUseCases'
import { WorkshopController } from './ports/WorkshopController'
import { WorkshopModel } from '../../domain/models/workshop/WorkshopModel'

export default class WorkshopControllerImpl implements WorkshopController {
  public async createWorkshop(
    name: string, areaOfVolunteerWork: string, local: string, period: string, description: string
  ): Promise<void> {
    try {
      const workshop = new Workshop()
      await workshop.createWorkshop(name, areaOfVolunteerWork, local, period, description)
    } catch (e) {
      throw e
    }
  }
  
  public async editWorkshop(
    id: string
  ): Promise<void> {
    try {
      const workshop = new Workshop()
      await workshop.editWorkshop(id)
    } catch (e) {
      throw e
    }
  }

  public async deleteWorkshop(
    id: string
  ): Promise<void> {
    try {
      const workshop = new Workshop()
      await workshop.deleteWorkshop(id)
    } catch (e) {
      throw e
    }
  }

  public async getMyWorkshops(
    id: string
  ): Promise<WorkshopModel[] | ErrorModel> {
    try {
      const workshop = new Workshop()
      const response = await workshop.getMyWorkshops(id)
      return response
    } catch (e) {
      throw e
    }
  }
}
