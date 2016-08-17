import {combineReducers} from 'redux';
import players from './players';
import groups from './groups';

export default combineReducers({
  players,
  groups
});
