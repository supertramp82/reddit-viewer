export const SET_FEED = 'SET_FEED';

export const setFeed = feed => {
  return {
    type: SET_FEED,
    payload: { feed },
  };
};
