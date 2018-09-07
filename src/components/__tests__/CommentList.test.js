import React from 'react';
import {mount} from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'root';

let component;
const initialComments = ['test1', 'test2']
const initialState = {
  comments: initialComments,
}

beforeEach(() => {
  component = mount(
    <Root initialState={initialState}>
      <CommentList></CommentList>
    </Root>
  );
});

afterEach(() => {
  component.unmount();
});

it('creates one LI element by comment', () => {
  expect(component.find('li').length).toEqual(
    initialComments.length
  );
});

it('shows the text for each comment', () => {
  const componentText = component.render().text();
  initialComments.map(comment => {
    expect(componentText).toContain(comment);
  });
});
