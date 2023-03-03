import { SET_CURSOR_HOVERED, SET_HOVERED_REF, TOGGLE_THEME } from './types';

export const setRef = (link: string) => ({
  type: SET_HOVERED_REF,
  payload: link,
});

export const setCursorHover = (hovered: boolean) => ({
  type: SET_CURSOR_HOVERED,
  payload: hovered,
});

export const toggleMode = () => ({
  type: TOGGLE_THEME,
});
