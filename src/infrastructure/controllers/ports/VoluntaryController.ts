import { VoluntaryModel } from '../../../domain/models/voluntary/WorkshopModel'

export interface VoluntaryController {
    getWorkshopVoluntaries(id: string): Promise<VoluntaryModel[]>
    findVoluntary(id: string, search?: string): Promise<VoluntaryModel[]>
    getVoluntary(id: string): Promise<VoluntaryModel>
}
