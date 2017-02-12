import uuid from 'node-uuid';

export const CREATE_GROUP = 'CREATE_GROUP';
export function createGroup(group) {
  return {
    type: CREATE_GROUP,
    group: {
      id: uuid.v4(),
      ...group
    }
  };
}

export const DELETE_GROUP = 'DELETE_GROUP';
export function deleteGroup(id) {
  return {
    type: DELETE_GROUP,
    id
  };
}

export const CHANGE_CURRENT_HOLE = 'CHANGE_CURRENT_HOLE';
export function changeCurrentHole(groupId, newHoleIndex) {
  return {
    type: CHANGE_CURRENT_HOLE,
    id: groupId,
    newHoleIndex: newHoleIndex
  };
}
