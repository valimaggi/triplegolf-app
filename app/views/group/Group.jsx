import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Row, Col, Panel, Button, Glyphicon } from 'react-bootstrap';
import PageHeader from '../../components/PageHeader';
import Player from '../../components/Player';
import holes from '../../constants/holes';
import { decrementCurrentHole, incrementCurrentHole } from './stateChanges';
import { capitalize } from '../../util/helpers';

class Group extends React.Component {

  constructor(props) {
    super(props);
    this.state = { currentHole: 1 };
  }

  decrementCurrentHole() {
    this.setState(decrementCurrentHole);
  }

  incrementCurrentHole() {
    this.setState(incrementCurrentHole);
  }

  updatePlayer(playerId, shots) {
    this.props.updatePlayer({ id: playerId, shots: shots });
  }

  render() {
    const { groups, players, updatePlayer, ...props } = this.props;
    const group = groups.find(groupElem => groupElem.get('id') === props.params.id);
    const groupName = `Group ${group.get('id')}`;
    const groupPlayers = players.filter(player => group.get('playerIds').includes(player.get('id')));
    const holePars = holes[group.get('sport')];
    const holeParText = `Hole ${this.state.currentHole} - Par ${holePars[this.state.currentHole]}`;

    return (
      <Row>
        <Col md={8}>
          <PageHeader header={groupName} />
          <h3>{capitalize(group.get('sport'))}</h3>
          <Panel header={holeParText} >
            <Row>
              <Col md={8}>
                <Button onClick={() => this.decrementCurrentHole()}><Glyphicon glyph="minus" /></Button>
                <Button onClick={() => this.incrementCurrentHole()}><Glyphicon glyph="plus" /></Button>
              </Col>
            </Row>
          </Panel>
          {groupPlayers.map(player =>
            <Row key={player.get('id')}>
              <Col md={6}>
                <Player player={player} />
                <Button onClick={() => this.updatePlayer(player.get('id'), player.get('shots') - 1)}><Glyphicon glyph="minus" /></Button>
                <Button onClick={() => this.updatePlayer(player.get('id'), player.get('shots') + 1)}><Glyphicon glyph="plus" /></Button>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    );
  }
}

Group.propTypes = {
  groups: PropTypes.instanceOf(List).isRequired,
  players: PropTypes.instanceOf(List).isRequired,
  updatePlayer: PropTypes.func.isRequired
};

export default Group;
