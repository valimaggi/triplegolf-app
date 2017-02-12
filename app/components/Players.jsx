import React, { PropTypes } from 'react';
import { List } from 'immutable';
import Player from './Player';

const Players = ({ players }) =>
  <div className="players">
    {players.map(player =>
      <Player className="player" key={player.get('id')} player={player} />
    )}
  </div>;


Players.propTypes = {
  players: PropTypes.instanceOf(List)
};

export default Players;
