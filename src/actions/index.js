// Action Creators

import * as types from './ActionTypes';

export const create = (color) => ({
  type: types.CREATE,
  color: color
});

export const remove = () => ({
  type: types.REMOVE
});

export const increment = (index) => ({
  type: types.INCREMENT,
  index: index
});

export const decrement = (index) => ({
  type: types.DECREMENT,
  index: index
});

export const setColor = ({index, color}) => ({
  type: types.SET_COLOR,
  index: index,
  color: color
});
