import { AuthRepository } from '../ports/AuthRepository'
import AuthRepositoryImpl from '../../infrastructure/repositories/AuthRepositoryImpl'
import { EditProfileModel, LoginModel, SignUpModel } from '../models/auth/AuthModel'
import { WorkshopRepository } from '../ports/WorkshopRepository'
import WorkshopRepositoryImpl from '../../infrastructure/repositories/WorkshopRepositoryImpl'
import { WorkshopModel } from '../models/workshop/WorkshopModel'

export class Workshop {
  repository: WorkshopRepository

  constructor() {
    this.repository = new WorkshopRepositoryImpl()
  }

  async createWorkshop(name: string, areaOfVolunteerWork: string, local: string, period: string, description: string): Promise<void> {
    await this.repository.createWorkshop(name, areaOfVolunteerWork, local, period, description)
  }

  async editWorkshop(id: string): Promise<void> {
    await this.repository.editWorkshop(id)
  }

  async deleteWorkshop(id: string): Promise<void> {
    await this.repository.deleteWorkshop(id)
  }

  async getMyWorkshops(id: string): Promise<WorkshopModel[]> {
    const repositoryResponse = await this.repository.getMyWorkshops(id)
    return repositoryResponse
  }
}
