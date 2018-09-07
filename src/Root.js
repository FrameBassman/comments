import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

export default props => {
  const initialState = {};
  return (
    <Provider store={createStore(reducers, initialState)}>
      {props.children}
    </Provider>
  )
}
