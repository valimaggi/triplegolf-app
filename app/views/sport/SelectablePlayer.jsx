import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Row, Col } from 'react-bootstrap';
import Player from '../../components/Player';

const SelectablePlayer = ({ player, isSelected, togglePreSelectToGroup }) => {
  const playerId = player.get('id');
  return (
    <div>
      <Row>
        <Col xs={9} md={9}>
          <Player player={player} />
        </Col>
        <Col xs={3} md={3}>
          <input className="select-player-to-group-checkbox" type="checkbox" checked={isSelected} onChange={() => togglePreSelectToGroup(playerId)} />
        </Col>
      </Row>
    </div>
  );
};

SelectablePlayer.propTypes = {
  player: PropTypes.instanceOf(Map).isRequired,
  isSelected: PropTypes.bool.isRequired,
  togglePreSelectToGroup: PropTypes.func,
};

export default SelectablePlayer;
