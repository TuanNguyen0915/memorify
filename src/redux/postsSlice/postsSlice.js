import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  posts: null,
  loading: false,
  error: false,
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    allPostsStart: (state) => {
      state.loading = true
    },
    allPostsSuccess: (state, action) => {
      state.posts = action.payload
      state.loading = false
      state.error = false
    },
    allPostsFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const { allPostsStart, allPostsFailure, allPostsSuccess } =
  postsSlice.actions
export default postsSlice.reducer