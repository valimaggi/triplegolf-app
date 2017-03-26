import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import DevTools from './DevTools';
import Home from '../views/home/ConnectedHome';
import Group from '../components/Group';
import Sport from '../views/sport/ConnectedSport';

const Root = ({ store, isProduction }) => (
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path=":path" component={Sport} />
          <Route path=":path" component={Sport} />
          <Route path=":path" component={Sport} />
          <Route path="group/:id" component={Group} />
        </Route>
      </Router>
      {!isProduction && <DevTools />}
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line
  isProduction: PropTypes.bool,
};

export default Root;
