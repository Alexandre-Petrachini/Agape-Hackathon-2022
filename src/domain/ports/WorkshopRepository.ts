import { WorkshopModel } from '../models/workshop/WorkshopModel'

export interface WorkshopRepository {
    createWorkshop(name: string, areaOfVolunteerWork: string, local: string, period: string, description: string): Promise<void>
    editWorkshop(id: string): Promise<void>
    deleteWorkshop(id: string): Promise<void>
    getMyWorkshops(id: string): Promise<WorkshopModel[]>
}
