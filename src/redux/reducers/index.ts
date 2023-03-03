import { combineReducers } from 'redux';
import cursorReducer from './cursor/cursor.reducer';
import themeReducer from './theme/theme.reducer';

const rootReducer = combineReducers({
  cursor: cursorReducer,
  theme: themeReducer,
});

export default rootReducer;
