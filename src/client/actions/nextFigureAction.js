import { SET_FIGURE } from 'reducers/types';

export function setFigure(figure) {
  return {
    type: SET_FIGURE,
    payload: figure,
  };
}
