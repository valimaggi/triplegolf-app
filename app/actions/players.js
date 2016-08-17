import uuid from 'node-uuid';

export const CREATE_PLAYER = 'CREATE_PLAYER';
export function createPlayer(player) {
  return {
    type: CREATE_PLAYER,
    player: {
      id: uuid.v4(),
      ...player
    }
  };
};

export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export function updatePlayer(updatedPlayer) {
  return {
    type: UPDATE_PLAYER,
    ...updatedPlayer
  };
};

export const DELETE_PLAYER = 'DELETE_PLAYER';
export function deletePlayer(id) {
  return {
    type: DELETE_PLAYER,
    id
  };
};

export const SWITCH_GROUP_PRESELECTION = 'SWITCH_GROUP_PRESELECTION';
export function switchGroupPreselection(playerId, sport, preSelectedToGroup) {
  return {
    type: SWITCH_GROUP_PRESELECTION,
    player: {
      id: playerId,
      sport: sport,
      preSelectedToGroup: preSelectedToGroup
    }
  }
}
