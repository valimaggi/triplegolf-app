import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Map, List } from 'immutable';
import { Row, Col, Button, Glyphicon } from 'react-bootstrap';
import Player from '../../components/Player';

class SportGroup extends React.Component {

  deleteGroup(id) {
    this.props.deleteGroup(id);
  }

  render() {
    const { group, players } = this.props;
    const groupPlayers = players.filter(player =>
      group.get('playerIds').findIndex(id => id === player.get('id')) >= 0
    );

    return (
      <Row>
        <Col md={6}>
          <Link className="group-link" to={'/group/' + group.get('id')} >
            {groupPlayers.map(player =>
              <Player key={player.get('id')} player={player} />
            )}
          </Link>
        </Col>
        <Col>
          <Button onClick={() => this.deleteGroup(group.get('id'))}><Glyphicon glyph="remove" /></Button>
        </Col>
      </Row>
    );
  }
}

SportGroup.propTypes = {
  group: PropTypes.instanceOf(Map).isRequired,
  players: PropTypes.instanceOf(List).isRequired,
  deleteGroup: PropTypes.func.isRequired
};

export default SportGroup;
