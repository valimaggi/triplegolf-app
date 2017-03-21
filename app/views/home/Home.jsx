import React, { PropTypes } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Map, List } from 'immutable';
import Players from '../../components/Players';

const Home = ({ players, createPlayer, updatePlayer, deletePlayer }) => (
  <div>
    <Row>
      <Col md={6}>
        Pick a sport from the navigation or create a new player.
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Button onClick={() => createPlayer({ name: 'New player', shots: 0, sports: Map() })}>
          + Create new player
        </Button>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <br />
        <Players players={players} updatePlayer={updatePlayer} deletePlayer={deletePlayer} />
      </Col>
    </Row>
  </div>
);

Home.propTypes = {
  players: PropTypes.instanceOf(List).isRequired,
  createPlayer: PropTypes.func.isRequired,
  updatePlayer: PropTypes.func.isRequired,
  deletePlayer: PropTypes.func.isRequired,
};

export default Home;
