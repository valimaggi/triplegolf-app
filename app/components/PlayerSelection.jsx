import React from 'react';
import SelectablePlayer from './SelectablePlayer.jsx';

export default ({players, sportName}) => {
  return (
    <div>
      <h2>Player selection</h2>
      {players.map((player) =>
        <SelectablePlayer key={player.get('id')} player={player} sportName={sportName} />
      )}
    </div>
  );
}
