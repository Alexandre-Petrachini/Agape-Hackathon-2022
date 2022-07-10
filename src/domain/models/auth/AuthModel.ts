export class LoginModel {
  token: string
  email: string
  password: string
  phone: string
  school: string
  rf: string
  occupationArea: string
  status: number

  constructor(token: string, email: string, password: string, phone: string, school: string, rf: string, occupationArea: string,  status: number) {
    this.token = token
    this.email = email
    this.password = password
    this.phone = phone
    this.school = school
    this.rf = rf
    this.occupationArea = occupationArea
    this.status = status
  }
}

export class SignUpModel {
  token: string
  email: string
  password: string
  phone: string
  school: string
  rf: string
  occupationArea: string
  status: number

  constructor(token: string, email: string, password: string, phone: string, school: string, rf: string, occupationArea: string,  status: number) {
    this.token = token
    this.email = email
    this.password = password
    this.phone = phone
    this.school = school
    this.rf = rf
    this.occupationArea = occupationArea
    this.status = status
  }
}
