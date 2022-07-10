import store from '../redux/store'
import { setUser } from '../redux/user/userSlice'
import { EditProfileModel, LoginModel, SignUpModel } from '../../domain/models/auth/AuthModel'
import { ErrorModel } from './models/ErrorModel'
import { UnauthorizedError } from '../repositories/errors/auth/UnauthorizedError'
import { VoluntaryController } from './ports/VoluntaryController'
import { VoluntaryModel } from '../../domain/models/voluntary/WorkshopModel'
import { Voluntary } from '../../domain/useCases/VoluntaryUseCases'

export default class VoluntaryControllerImpl implements VoluntaryController {
  public async getWorkshopVoluntaries(
    id: string
  ): Promise<VoluntaryModel[]> {
    try {
      const voluntary = new Voluntary()
      const response = await voluntary.getWorkshopVoluntaries(id)
      return response
    } catch (e) {
      throw e
    }
  }

  public async findVoluntary(
    id: string,
    search?: string
  ): Promise<VoluntaryModel[]> {
    try {
      const voluntary = new Voluntary()
      const response = await voluntary.findVoluntary(id)
      return response
    } catch (e) {
      throw e
    }
  }

  public async getVoluntary(
    id: string
  ): Promise<VoluntaryModel> {
    try {
      const voluntary = new Voluntary()
      const response = await voluntary.getVoluntary(id)
      return response
    } catch (e) {
      throw e
    }
  }
}
