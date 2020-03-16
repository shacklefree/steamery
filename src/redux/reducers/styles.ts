import { types } from '../actions/styles';

const STYLEGUIDE_LOCAL_STORAGE_KEY = 'styleguide';

const initialState = {
  styleguide: localStorage.getItem(STYLEGUIDE_LOCAL_STORAGE_KEY),
};

export default (state = initialState, action: any) => {
  if (types.SET_STYLEGUIDE && action.styleguide) {
    const { styleguide } = action;
    localStorage.setItem(STYLEGUIDE_LOCAL_STORAGE_KEY, styleguide);
    // reload the window to allow loading the new styleguide and reset any CSS which we might have loaded before
    window.location.reload();
    return { styleguide };
  }

  return state;
};
