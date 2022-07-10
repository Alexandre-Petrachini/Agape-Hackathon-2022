import { VoluntaryModel } from '../models/voluntary/WorkshopModel'

export interface VoluntaryRepository {
    getWorkshopVoluntaries(id: string): Promise<VoluntaryModel[]>
    findVoluntary(id: string, search?: string): Promise<VoluntaryModel[]>
    getVoluntary(id: string): Promise<VoluntaryModel>
}
