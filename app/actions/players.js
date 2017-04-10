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
}

export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export function updatePlayer(updatedPlayer) {
  return {
    type: UPDATE_PLAYER,
    player: {
      ...updatedPlayer
    }
  };
}

export const DELETE_PLAYER = 'DELETE_PLAYER';
export function deletePlayer(id) {
  return {
    type: DELETE_PLAYER,
    id
  };
}
