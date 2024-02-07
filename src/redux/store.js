import { configureStore, combineReducers } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
// reducers
import userReducer from "./userSlice/userSlice"
import postsReducer from "./postsSlice/postsSlice"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
}
const rootReducer = combineReducers({ user: userReducer, posts: postsReducer })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
