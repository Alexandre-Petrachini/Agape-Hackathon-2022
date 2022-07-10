import { WorkshopModel } from '../../../domain/models/workshop/WorkshopModel'
import { ErrorModel } from '../models/ErrorModel'

export interface WorkshopController {
    createWorkshop(name: string, areaOfVolunteerWork: string, local: string, period: string, description: string): Promise<void>
    editWorkshop(id: string): Promise<void>
    deleteWorkshop(id: string): Promise<void>
    getMyWorkshops(id: string): Promise<WorkshopModel[] | ErrorModel>
    getWorkshop(id: string): Promise<WorkshopModel>
}
