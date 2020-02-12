import { types } from "../actions/auth"

export default (state = {}, action: any) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        uid: action.uid,
        ...action.userData
      }
    case types.LOGOUT_SUCCESS:
      return {}
    default:
      return state
  }
}
