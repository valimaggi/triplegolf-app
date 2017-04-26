import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import DevTools from './DevTools';
import Home from '../views/home/ConnectedHome';
import Group from '../components/Group';
import { GolfSport, DiscgolfSport, MinigolfSport } from './SportWrappers';

const Root = ({ store, isProduction }) => (
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="golf" component={GolfSport} />
          <Route path="discgolf" component={DiscgolfSport} />
          <Route path="minigolf" component={MinigolfSport} />
          <Route path="group/:id" component={Group} />
        </Route>
      </Router>
      {!isProduction && <DevTools />}
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line
  isProduction: PropTypes.boolean,
};

export default Root;
