import { AuthRepository } from '../ports/AuthRepository'
import AuthRepositoryImpl from '../../infrastructure/repositories/AuthRepositoryImpl'
import { EditProfileModel, LoginModel, SignUpModel } from '../models/auth/AuthModel'
import { WorkshopRepository } from '../ports/WorkshopRepository'
import WorkshopRepositoryImpl from '../../infrastructure/repositories/WorkshopRepositoryImpl'
import { WorkshopModel } from '../models/workshop/WorkshopModel'
import { VoluntaryRepository } from '../ports/VoluntaryRepository'
import VoluntaryRepositoryImpl from '../../infrastructure/repositories/VoluntaryRepositoryImpl'
import { VoluntaryModel } from '../models/voluntary/WorkshopModel'

export class Voluntary {
  repository: VoluntaryRepository

  constructor() {
    this.repository = new VoluntaryRepositoryImpl()
  }

  async getWorkshopVoluntaries(id: string): Promise<VoluntaryModel[]> {
    const response = await this.repository.getWorkshopVoluntaries(id)
    return response
  }

  async findVoluntary(id: string, search?: string): Promise<VoluntaryModel[]> {
    const response = await this.repository.findVoluntary(id, search)
    return response
  }

  async getVoluntary(id: string): Promise<VoluntaryModel> {
    const response = await this.repository.getVoluntary(id)
    return response
  }
}
