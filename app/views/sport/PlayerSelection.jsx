import React, { PropTypes } from 'react';
import { List } from 'immutable';
import SelectablePlayer from './SelectablePlayer';

const PlayerSelection = ({ players, sport }) => (
  <div>
    <h2>Player selection</h2>
    {players.map(player => <SelectablePlayer key={player.get('id')} player={player} sport={sport} />)}
  </div>
);

PlayerSelection.propTypes = {
  players: PropTypes.instanceOf(List),
  sport: PropTypes.string,
};

export default PlayerSelection;
