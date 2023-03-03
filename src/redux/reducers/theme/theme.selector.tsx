import { createSelector } from 'reselect';

interface cursorState {
  darkMode: boolean;
  background: string;
  textColor: string;
}

interface mainState {
  theme: cursorState;
}

export const themeMainState = (state: mainState) => state.theme;

export const selectBackground = createSelector(
  [themeMainState],
  (state) => state.background
);

export const selectIsDarkMode = createSelector(
  [themeMainState],
  (state) => state.darkMode
);

export const selectTextColor = createSelector(
  [themeMainState],
  (state) => state.textColor
);
