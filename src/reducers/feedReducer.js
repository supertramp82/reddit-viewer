import { SET_FEED } from '../actions/feedActions';

export const feedReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_FEED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
