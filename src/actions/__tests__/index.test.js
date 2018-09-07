import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
  const comment = '';
  const action = saveComment(comment);

  it('has the SAVE_COMMENT type', () => {
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the comment in payload', () => {
    expect(action.payload).toEqual(comment);
  });
})
