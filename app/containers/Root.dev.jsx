import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Home from '../views/home/ConnectedHome';
import Group from '../components/Group';
import Sport from '../views/sport/ConnectedSport';

const Root = ({ store }) => (
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
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line
};

export default Root;
