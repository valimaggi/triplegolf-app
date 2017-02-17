import React, { PropTypes } from 'react';
import { List } from 'immutable';
import { Row, Col, ListGroup } from 'react-bootstrap';
import Player from './Player';

const Players = ({ players, ...props }) =>
  <Row>
    <Col md={6}>
      <ListGroup>
        {players.map(player =>
          <Player key={player.get('id')} player={player} {...props} />
        )}
      </ListGroup>;
    </Col>
  </Row>;


Players.propTypes = {
  players: PropTypes.instanceOf(List)
};

export default Players;
