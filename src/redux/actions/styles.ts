export const types = {
  SET_STYLEGUIDE: 'SET_STYLEGUIDE',
};

export const setStyleguide = (styleguide: string) => ({
  type: types.SET_STYLEGUIDE,
  styleguide,
});
