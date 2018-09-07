import React from 'react';
import {shallow} from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let component;

beforeEach(() => {
  component = shallow(<App/>);
});

it('shows a comment box', () => {
  expect(component.find(CommentBox).exists()).toBeTruthy();
});

it('shows a comment list', () => {
  expect(component.find(CommentList).exists()).toBeTruthy();
});
