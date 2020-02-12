import { combineReducers } from "redux"

import authReducer from "./auth"

const reducers = combineReducers({
  auth: authReducer
})

export type ReduxState = ReturnType<typeof reducers>

export default reducers
