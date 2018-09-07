import { commentReducer } from "reducers/comments";
import { SAVE_COMMENT } from 'actions/types';

it('handle actions from SAVE_COMMENT', () => {
  const initnalComments = [];
  const newComment = 'Test';
  const action = {
    type: SAVE_COMMENT,
    payload: newComment,
  }
  
  const updatedState = commentReducer(initnalComments, action);

  expect(updatedState).toContainEqual(newComment);
});

