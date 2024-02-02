import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true
    },
    logInSuccess: (state, action) => {
      state.currentUser = action.payload
      state.loading = false
    },
    loginFailure: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { logInSuccess, loginStart, loginFailure } = userSlice.actions
export default userSlice.reducer
