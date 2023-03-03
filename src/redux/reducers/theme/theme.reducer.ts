import { TOGGLE_THEME } from '../../actions/types';

export const THEME_INITIAL_STATE = {
  darkMode: true,
};

interface actionType {
  type: string;
  payload: any;
}

const themeReducer = (state = THEME_INITIAL_STATE, action: actionType) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

export default themeReducer;
