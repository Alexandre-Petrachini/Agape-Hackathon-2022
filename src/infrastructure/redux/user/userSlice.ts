import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, UserSliceState } from './type'

const initialState: UserSliceState = {
  user: {
    email: '',
    phone: '',
    school: '',
    rf: '',
    occupationArea: ''
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = {
        ...action.payload,
      }
    },
    logout: (state) => {
      state.user = {
        email: '',
        phone: '',
        school: '',
        rf: '',
        occupationArea: ''
      }
    },
  },
})

export const { setUser, logout } = userSlice.actions

export default userSlice.reducer
