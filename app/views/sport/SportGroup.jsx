import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Map, List } from 'immutable';
import { Panel, Row, Col, Button, Glyphicon } from 'react-bootstrap';
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
    const groupTitle = `Group ${group.get('id')}`;

    return (
      <Panel header={groupTitle}>
        <Row>
          <Col md={6}>
            {groupPlayers.map(player =>
              <Player key={player.get('id')} player={player} />
            )}
          </Col>
          <Col md={1}>
            <Row>
              <Col md={12}>
                <Link to={'/group/' + group.get('id')} >
                  <Button bsSize="large" bsStyle="success"><Glyphicon glyph="zoom-in" /></Button>
                </Link>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={12}>
                <Button bsSize="large" bsStyle="danger" onClick={() => this.deleteGroup(group.get('id'))}><Glyphicon glyph="remove" /></Button>
              </Col>
            </Row>

          </Col>
        </Row>
      </Panel>
    );
  }
}

SportGroup.propTypes = {
  group: PropTypes.instanceOf(Map).isRequired,
  players: PropTypes.instanceOf(List).isRequired,
  deleteGroup: PropTypes.func.isRequired
};

export default SportGroup;
