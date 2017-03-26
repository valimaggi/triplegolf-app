import React, { PropTypes } from 'react';
import { List } from 'immutable';
import includes from 'lodash/includes';
import SelectablePlayer from './SelectablePlayer';

const PlayerSelection = ({ players, preSelectedPlayerIds, togglePreSelectToGroup }) => (
  <div>
    <h2>Player selection</h2>
    {players.map(player => (
      <SelectablePlayer
        key={player.get('id')}
        player={player}
        isSelected={includes(preSelectedPlayerIds, player.get('id'))}
        togglePreSelectToGroup={togglePreSelectToGroup}
      />
    ))}
  </div>
);

PlayerSelection.propTypes = {
  players: PropTypes.instanceOf(List),
  preSelectedPlayerIds: PropTypes.array.isRequired, // eslint-disable-line
  togglePreSelectToGroup: PropTypes.func,
};

export default PlayerSelection;
