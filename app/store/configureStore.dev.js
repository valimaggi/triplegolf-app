import { createStore } from 'redux';
import { persistState } from 'redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/); // eslint-disable-line
  return matches && matches.length > 0 ? matches[1] : null;
}

const composeEnhancers = composeWithDevTools({});

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composeEnhancers(
    persistState(getDebugSessionKey())
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers/index').default);
    });
  }

  return store;
}
