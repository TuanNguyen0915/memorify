import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentUser : null,
  loading: false,
  error: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authStart: (state) => {
      state.loading = true
    },
    authSuccess: (state, action) => {
      state.currentUser = action.payload
      state.loading = false
    },
    authFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const { authStart, authSuccess, authFailure } = userSlice.actions
export default userSlice.reducer
