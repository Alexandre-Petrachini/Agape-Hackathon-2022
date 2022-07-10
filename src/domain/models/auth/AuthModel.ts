export class LoginModel {
  token: string

  login: string

  isAdmin: boolean

  status: number

  constructor(token: string, login: string, isAdmin: boolean, status: number) {
    this.token = token
    this.login = login
    this.isAdmin = isAdmin
    this.status = status
  }
}

export class SignUpModel {
  token: string
  status: number

  constructor(token: string, status: number) {
    this.token = token
    this.status = status
  }
}
