export interface IUser {
  email: string
  phone: string
  school: string
  rf: string
  occupationArea: string
}

export interface UserSliceState {
  user: IUser
}
