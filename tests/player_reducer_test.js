import assert from 'assert';
import {Map} from 'immutable';
import * as types from 'app/actions/players';
import reducer from 'app/reducers/players';

describe('PlayerReducer', () => {
  it('should return the initial state', () => {
    assert.equal(reducer(undefined, {}).count(), 0);
  });

  it('should create players', () => {
    const player = {
      id: 'blaa',
      name: 'Mikko',
      shots: 0
    };
    assert.deepEqual(reducer(undefined, {
      type: types.CREATE_PLAYER,
      player: player
    }).toJS(), [player]);
  });

  it('should delete players', () => {
    const player = {
      id: 'blaa',
      name: 'Mikko',
      shots: 0
    };

    const players = reducer(undefined, {
      type: types.CREATE_PLAYER,
      player: player
    });

    const state = reducer(players, {
      type: types.DELETE_PLAYER,
      id: player.id
    });

    assert.equal(state.count(), 0);
  });

  it('should not crash while deleting a non-existent player', () => {
    const player = {
      id: 'blaa',
      name: 'Mikko',
      shots: 0
    };

    const players = reducer(undefined, {
      type: types.CREATE_PLAYER,
      player: player
    });

    const state = reducer(players, {
      type: types.DELETE_PLAYER,
      id: player.id + player.id
    });

    assert.equal(state.count(), 1);
    assert.equal(state.get(0).get('id'), player.id);
    assert.equal(state.get(0).get('name'), player.name);
  });

  it('should add shot count by 1', () => {
    const player = {
      id: 'blaa',
      name: 'Mikko',
      shots: 0
    };

    const players = reducer(undefined, {
      type: types.CREATE_PLAYER,
      player: player
    });

    const newShotsCount = 1;

    const state = reducer(players, {
      type: types.UPDATE_PLAYER,
      id: player.id,
      shots: newShotsCount
    });

    assert.equal(state.get(0).get('shots'), newShotsCount);
  });

  it('should substract shot count by 1', () => {
    const player = {
      id: 'blaa',
      name: 'Mikko',
      shots: 3
    };

    const players = reducer(undefined, {
      type: types.CREATE_PLAYER,
      player: player
    });

    const newShotsCount = 2;

    const state = reducer(players, {
      type: types.UPDATE_PLAYER,
      id: player.id,
      shots: newShotsCount
    });

    assert.equal(state.get(0).get('shots'), newShotsCount);
  });
  it('should select player in group in sport golf', () => {
    const player = {
      id: 'blaa',
      name: 'Mikko',
      sports: Map()
    };

    const players = reducer(undefined, {
      type: types.CREATE_PLAYER,
      player: player
    });

    const sportName = 'golf';
    const preSelectedToGroup = true;
    const state = reducer(players, {
      type: types.SWITCH_GROUP_PRESELECTION,
      player: {
        id: player.id,
        sport: sportName,
        preSelectedToGroup: preSelectedToGroup
      }
    });

    assert.equal(state.get(0).get('sports').get(sportName).get('preSelectedToGroup'), preSelectedToGroup);
  });
  it('should unselect player in group in sport golf', () => {
    const sportName = 'golf';
    const selectionKey = 'preSelectedToGroup';
    const player = {
      id: 'blaa',
      name: 'Mikko',
      sports: Map().setIn([sportName, selectionKey], true)
    };

    const players = reducer(undefined, {
      type: types.CREATE_PLAYER,
      player: player
    });


    const preSelectedToGroup = false;
    const state = reducer(players, {
      type: types.SWITCH_GROUP_PRESELECTION,
      player: {
        id: player.id,
        sport: sportName,
        preSelectedToGroup: preSelectedToGroup
      }
    });

    assert.equal(state.get(0).get('sports').get(sportName).get(selectionKey), preSelectedToGroup);
  });
});
