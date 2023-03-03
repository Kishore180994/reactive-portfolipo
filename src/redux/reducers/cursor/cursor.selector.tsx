import { createSelector } from 'reselect';

interface cursorState {
  divRef: string;
  hovered: boolean;
}

interface mainState {
  cursor: cursorState;
}

export const cursorMainState = (state: mainState) => state.cursor;

export const selectHoverState = createSelector(
  [cursorMainState],
  (state) => state.hovered
);

export const selectDivRef = createSelector(
  [cursorMainState],
  (state) => state.divRef
);
