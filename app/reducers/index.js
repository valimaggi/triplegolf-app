import { combineReducers } from 'redux-immutable';
import players from './players';
import groups from './groups';

export default combineReducers({
  playersData: players,
  groupsData: groups
});
