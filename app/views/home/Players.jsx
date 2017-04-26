import React, { PropTypes } from 'react';
import { List } from 'immutable';
import Player from '../../components/Player';

const Players = ({ players, ...props }) => (
  <div>
    {players.map(player => (
      <Player key={player.get('id')} player={player} {...props} />
    ))}
  </div>
);

Players.propTypes = {
  players: PropTypes.instanceOf(List).isRequired
};

export default Players;
