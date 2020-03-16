import { combineReducers } from "redux"

import authReducer from "./auth"
import stylesReducer from "./styles"

const reducers = combineReducers({
  auth: authReducer,
  styles: stylesReducer,
})

export type ReduxState = ReturnType<typeof reducers>

export default reducers
