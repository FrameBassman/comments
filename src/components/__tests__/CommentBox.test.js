import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'roots';

let component;

beforeEach(() => {
  component = mount(
    <Root>
      <CommentBox></CommentBox>
    </Root>
  );
});

afterEach(() => {
  component.unmount();
})

it('have form', () => {
  expect(component.exists('form')).toBeTruthy();
});

it('have submit button and textarea', () => {
  expect(component.find('textarea').length).toEqual(1);
  expect(component.find('button').length).toEqual(1);
  expect(component.find('button').html()).toMatch('Submit');
});

describe('textarea', () => {
  const testComment = 'some';

  beforeEach(() => {
    const textarea = component.find('textarea');
    textarea.simulate('change', {
      target: { value: testComment }
    });
    component.update();
  })

  it('has a textarea that users can type it', () => {  
    expect(
      component
      .find('textarea')
      .prop('value')
    )
    .toEqual(testComment);
  });
  
  it('textarea is empty after submit', () => {
    const form = component.find('form');
    form.simulate('submit');
    component.update();
    
    expect(
      component
      .find('textarea')
      .prop('value')
    )
    .toEqual('');
  });
})
