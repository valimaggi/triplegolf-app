import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import SportGroup from './SportGroup';

const SportGroups = ({ groups, players }) =>
  <div>
    {groups.map(group =>
      <div>
        <SportGroup key={group.get('id')} group={group} players={players} />
        <br />
      </div>
    )}
  </div>;

SportGroups.propTypes = {
  groups: PropTypes.instanceOf(List).isRequired,
  players: PropTypes.instanceOf(List).isRequired,
};

export default SportGroups;
