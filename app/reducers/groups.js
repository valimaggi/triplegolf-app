import {Map, List} from 'immutable';
import * as types from '../actions/groups';

const initialState = List();

export default function groups(state = initialState, action) {

  let groupIndex;
  switch (action.type) {

    case types.CREATE_GROUP:
      return state.push(Map(action.group));
    case types.DELETE_GROUP:
      groupIndex = state.findIndex(group => group.get('id') === action.id);

      if(groupIndex < 0) {
        return state;
      }

      return state.delete(groupIndex);
    default:
      return state;
  }
}
