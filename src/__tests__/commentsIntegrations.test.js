import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import {commentsUrl} from 'actions/urls';
import Root from 'root';
import App from 'components/App';
import axios from 'axios';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(commentsUrl, {
    status: 200,
    response: [
      {name: '1'}, {name: '2'}, {name: '3'},
      {name: '4'}, {name: '5'},
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch 5 comments and display them', done => {
  const component = mount(
    <Root>
      <App></App>
    </Root>
  );

  component.find('#fetch').simulate('click');

  moxios.wait(() => {
    component.update();
    expect(component.find('li').length).toEqual(5);
    done();
    component.unmount();
  }, 100);
});
