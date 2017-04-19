import assert from 'assert';
import { togglePreSelectToGroup } from '../../app/views/sport/stateChanges';

describe('sport view state changes', () => {
  it('should return empty state when nothing put in and previous state is empty', () => {
    const prevState = {};
    const expected = prevState;
    const actual = togglePreSelectToGroup()(prevState);
    assert.deepEqual(expected, actual);
  });

  it('should return empty state when nothing put in and previous state is not empty', () => {
    const prevState = { preSelectedPlayerIds: [1] };
    const expected = prevState;
    const actual = togglePreSelectToGroup()(prevState);
    assert.deepEqual(expected, actual);
  });

  it('should return empty state when null put in and previous state is empty', () => {
    const prevState = {};
    const expected = prevState;
    const actual = togglePreSelectToGroup(null)(prevState);
    assert.deepEqual(expected, actual);
  });

  it('should return empty state when null put in and previous state is not empty', () => {
    const prevState = { preSelectedPlayerIds: [1] };
    const expected = prevState;
    const actual = togglePreSelectToGroup(null)(prevState);
    assert.deepEqual(expected, actual);
  });

  it('should return state with one provided player id when previous state is empty', () => {
    const prevState = {};
    const expected = { preSelectedPlayerIds: [1] };
    const actual = togglePreSelectToGroup(1)(prevState);
    assert.deepEqual(expected, actual);
  });

  it('should return state with one provided player id when previous state has empty list', () => {
    const prevState = { preSelectedPlayerIds: [] };
    const expected = { preSelectedPlayerIds: [1] };
    const actual = togglePreSelectToGroup(1)(prevState);
    assert.deepEqual(expected, actual);
  });

  it('should return state with two ids, one added and order maintained, when previous state has one id in list', () => {
    const prevState = { preSelectedPlayerIds: [2] };
    const expected = { preSelectedPlayerIds: [2, 1] };
    const actual = togglePreSelectToGroup(1)(prevState);
    assert.deepEqual(expected, actual);
  });

  it('should return state with untoggled id, when previous state has two ids in list and other one is put in', () => {
    const prevState = { preSelectedPlayerIds: [1, 2] };
    const expected = { preSelectedPlayerIds: [2] };
    const actual = togglePreSelectToGroup(1)(prevState);
    assert.deepEqual(expected, actual);
  });
});
