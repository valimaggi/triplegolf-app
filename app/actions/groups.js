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
};

export const DELETE_GROUP = 'DELETE_GROUP';
export function deleteGroup(id) {
  return {
    type: DELETE_GROUP,
    id
  };
};
