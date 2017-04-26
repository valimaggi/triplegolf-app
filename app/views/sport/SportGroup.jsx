import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Map, List } from 'immutable';
import { Row, Col } from 'react-bootstrap';
import Player from '../../components/Player';

class SportGroup extends React.Component {

  render() {
    const { group, players } = this.props;
    const groupPlayers = players.filter(player =>
      group.get('playerIds').findIndex(id => id === player.get('id')) >= 0
    );

    return (
      <Row>
        <Col md={4}>
          <Link className="group-link" to={'/group/' + group.get('id')} >
            {groupPlayers.map(player =>
              <Player key={player.get('id')} player={player} isNameOnly />
            )}
          </Link>
        </Col>
        <Col>
          <button onClick={() => this.deleteGroup(group)}>X</button>
        </Col>
      </Row>
    );
  }
}

SportGroup.propTypes = {
  group: PropTypes.instanceOf(Map).isRequired,
  players: PropTypes.instanceOf(List).isRequired,
};

export default SportGroup;
