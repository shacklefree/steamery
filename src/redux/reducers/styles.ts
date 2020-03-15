import { types } from "../actions/styles"

export default (state = {}, action: any) => {
  if ( types.SET_STYLEGUIDE) {
    return { styleguide: action.styleguide };
  }

  return state;
}
