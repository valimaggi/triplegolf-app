import React, { PropTypes } from 'react';
import { List } from 'immutable';
import SportGroup from './SportGroup';

const SportGroups = ({ groups, players }) =>
  <div>
    {groups.map(group =>
      <SportGroup key={group.get('id')} group={group} players={players} />
      )}
  </div>;

SportGroups.propTypes = {
  groups: PropTypes.instanceOf(List).isRequired,
  players: PropTypes.instanceOf(List).isRequired,
};

export default SportGroups;
