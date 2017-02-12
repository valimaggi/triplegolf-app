import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS, Map } from 'immutable';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import storage from './libs/storage';

const APP_STORAGE = 'triplegolf';

function serialize(state) {
  const serializedState = state.toJS();
  // Object.keys(state).forEach(k => serializedState[k] = state[k].toJS()); // eslint-disable-line
  return serializedState;
}

function deserialize(state) {
  const deserializedState = Map();
  Object.keys(state || {}).forEach(k => deserializedState.set(k, fromJS(state[k]))); // eslint-disable-line

  return deserializedState;
}

const store = configureStore(deserialize(storage.get(APP_STORAGE)));
store.subscribe(() => {
  if (!storage.get('debug')) {
    storage.set(APP_STORAGE, serialize(store.getState()));
  }
});

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app') // eslint-disable-line
);
