import React from 'react';
import {Provider} from 'react-redux';
import {Router}  from 'react-router/lib/Router';
import {Route}  from 'react-router/lib/Route';
import {IndexRoute}  from 'react-router/lib/IndexRoute';
import {browserHistory} from 'react-router/lib/browserHistory';
import App from './App.jsx';
import Home from '../components/Home.jsx';
import {GolfSport, DiscgolfSport, MinigolfSport} from './SportWrappers.jsx';


export default ({store}) =>
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="golf" component={GolfSport}/>
        <Route path="discgolf" component={DiscgolfSport}/>
        <Route path="minigolf" component={MinigolfSport}/>
      </Route>
    </Router>
  </Provider>
