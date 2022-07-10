export class WorkshopModel {
    name: string
    areaOfVolunteerWork: string
    local: string
    period: string
    description: string
  
    constructor(name: string, areaOfVolunteerWork: string, local: string, period: string, description: string) {
      this.name = name
      this.areaOfVolunteerWork = areaOfVolunteerWork
      this.local = local
      this.period = period
      this.description = description
    }
}
  