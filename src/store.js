import {configureStore} from "@reduxjs/toolkit"
import tokenReducer from "./feature/auth/tokenSlice"

export const store = configureStore({
reducer: { token:tokenReducer}
})
