import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Row, Col } from 'react-bootstrap';
import Player from '../../components/Player';

const Players = ({ players, ...props }) => (
  <Row>
    <Col md={12}>
      {players.map(player => (
        <Player key={player.get('id')} player={player} {...props} />
      ))}
    </Col>
  </Row>
);

Players.propTypes = {
  players: PropTypes.instanceOf(List).isRequired
};

export default Players;
