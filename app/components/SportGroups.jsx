import React from 'react';
import SportGroup from './SportGroup.jsx';

export default ({groups, players, sport}) => {
  return (
    <div>
      <h2>Groups</h2>
      <div>{groups.map((group) =>
          <SportGroup key={group.get('id')} group={group} players={players}/>
        )}
      </div>
    </div>
  );
}
