import React from 'react';
import Player from './Player.jsx';

export default ({players}) => {
  return (
    <div className="players">{players.map((player) =>
      <Player className="player" key={player.get('id')} player={player} />
    )}</div>
  );
}
