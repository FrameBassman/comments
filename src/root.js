import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

export default ({ children, initialState = {}}) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
