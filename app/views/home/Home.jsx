import React, { PropTypes } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Map, List } from 'immutable';
import Players from '../../components/Players';

const Home = ({ players, createPlayer }) =>
(
  <div>
    <Row>
      <Col>
        Pick a sport from the navigation or create a new player.
      </Col>
    </Row>
    <Row>
      <Col>
        <Button onClick={() => createPlayer({ name: 'New player', shots: 0, sports: Map() })}>
          +
        </Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Players players={players} />
      </Col>
    </Row>
  </div>
);

Home.propTypes = {
  players: PropTypes.instanceOf(List).isRequired,
  createPlayer: PropTypes.func.isRequired
};

export default Home;
