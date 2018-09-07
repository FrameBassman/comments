import { commentReducer } from "reducers/comments";
import { SAVE_COMMENT } from 'actions/types';

const initialComments = [];
const newComment = 'Test';

it('handle actions from SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: newComment,
  }
  
  const updatedState = commentReducer(initialComments, action);

  expect(updatedState).toContainEqual(newComment);
});

it('handle actions from unknown type', () => {
  const UNKNOWN_TYPE = 'ASDAWDAFWA';
  const action = {
    type: UNKNOWN_TYPE,
    payload: newComment,
  }

  const updatedState = commentReducer(initialComments, action);

  expect(updatedState).toEqual(
    expect.arrayContaining(initialComments)
  );
});

