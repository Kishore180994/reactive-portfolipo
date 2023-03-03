import { SET_CURSOR_HOVERED, SET_HOVERED_REF } from '../../actions/types';

export const INITIAL_STATE = {
  divRef: '',
  hovered: false,
};

interface actionType {
  type: string;
  payload: any;
}

const cursorReducer = (state = INITIAL_STATE, action: actionType) => {
  switch (action.type) {
    case SET_HOVERED_REF:
      return { ...state, divRef: action.payload };
    case SET_CURSOR_HOVERED:
      return { ...state, hovered: action.payload };
    default:
      return state;
  }
};

export default cursorReducer;
