import assert from 'assert';
import {Map} from 'immutable';
import * as types from 'app/actions/groups';
import reducer from 'app/reducers/groups';

describe('GroupReducer', () => {
  it('should return the initial state', () => {
    assert.equal(reducer(undefined, {}).count(), 0);
  });

  it('should create an empty group', () => {
    const group = {
      id: 'blaa',
      sport: 'golf',
      playerIds: []
    };
    assert.deepEqual(reducer(undefined, {
      type: types.CREATE_GROUP,
      group: group
    }).toJS(), [group]);
  });

  it('should create a group with player ids', () => {
    const playerId1 = 'a9833r';
    const playerId2 = '239jv934';
    const group = {
      id: 'blaa',
      sport: 'golf',
      playerIds: [playerId1, playerId2]
    };

    assert.deepEqual(reducer(undefined, {
      type: types.CREATE_GROUP,
      group: group
    }).toJS(), [group]);
  });

  it('should delete group', () => {
    const group = {
      id: 'blaa',
      sport: 'golf',
      playerIds: []
    };

    const groups = reducer(undefined, {
      type: types.CREATE_GROUP,
      group: group
    });

    const state = reducer(groups, {
      type: types.DELETE_GROUP,
      id: group.id
    });

    assert.equal(state.count(), 0);
  });
});
