import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import DevTools from './DevTools';
import Home from '../views/home/ConnectedHome';
import Group from '../components/Group';
import { GolfSport, DiscgolfSport, MinigolfSport } from './SportWrappers';

const Root = ({ store }) =>
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
      <DevTools />
    </div>
  </Provider>;

Root.propTypes = {
  store: PropTypes.object.isRequired // eslint-disable-line
};

export default Root;
