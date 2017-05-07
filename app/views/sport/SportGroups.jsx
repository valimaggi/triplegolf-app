import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import SportGroup from './SportGroup';

const SportGroups = ({ groups, players, deleteGroup }) =>
  <div>
    {groups.map(group =>
      <div>
        <SportGroup key={group.get('id')} group={group} players={players} deleteGroup={deleteGroup} />
        <br />
      </div>
    )}
  </div>;

SportGroups.propTypes = {
  groups: PropTypes.instanceOf(List).isRequired,
  players: PropTypes.instanceOf(List).isRequired,
  deleteGroup: PropTypes.func.isRequired
};

export default SportGroups;
