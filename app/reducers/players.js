import {List, Map} from 'immutable';
import * as types from '../actions/players';

const initialState = List();

export default function players(state = initialState, action) {
  let playerIndex;
  let sportIndex;

  switch (action.type) {
    case types.CREATE_PLAYER:
      return state.push(Map(action.player));
    case types.UPDATE_PLAYER:
      playerIndex = state.findIndex(player => player.get('id') === action.id);

      if(playerIndex < 0) {
        return state;
      }

      const {type, ...updatedPlayer} = action;
      return state.mergeIn([playerIndex], updatedPlayer);
    case types.DELETE_PLAYER:
      playerIndex = state.findIndex(player => player.get('id') === action.id);

      if(playerIndex < 0) {
        return state;
      }

      return state.delete(playerIndex);
    case types.SWITCH_GROUP_PRESELECTION:
      playerIndex = state.findIndex(player => player.get('id') === action.player.id);

      if(playerIndex < 0) {
        return state;
      }

      return state.setIn([playerIndex, 'sports', action.player.sport, 'preSelectedToGroup'], action.player.preSelectedToGroup);
    default:
      return state;
  }
}
