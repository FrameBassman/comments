import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export function commentReducer(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const data = action.payload.data;
      const comments = data.map(comment => comment.name);
      return [...state, ...comments];
    default:
      return state;
  }
}
