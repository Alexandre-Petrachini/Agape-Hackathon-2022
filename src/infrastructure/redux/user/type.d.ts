export interface IUser {
  login: string
  isAdmin: boolean
}

export interface UserSliceState {
  user: IUser
}
