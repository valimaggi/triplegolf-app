import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import { Row, Col, Button } from 'react-bootstrap';
import PlayerSelection from './PlayerSelection';
import PageHeader from '../../components/PageHeader';
import SportGroups from '../../components/SportGroups';
import { togglePreSelectToGroup } from './stateChanges';

class Sport extends Component {
  constructor(props) {
    super(props);
    this.state = { preSelectedPlayerIds: [] };
  }

  togglePreSelectToGroup(playerId) {
    this.setState(togglePreSelectToGroup(playerId));
  }

  createGroup(sport, e) {
    e.stopPropagation();
    this.props.createGroup({ sport: sport, playerIds: this.state.preSelectedPlayerIds });
  }

  render() {
    const { players, groups, ...props } = this.props;
    const sport = props.params.path;
    const sportGroups = groups.filter(group => group.get('sport').get('name') === sport);
    const grouplessPlayers = players.filter(player =>
      sportGroups.filter(group =>
        group.get('playerIds').includes(player.get('id'))
      )
    );
    return (
      <div>
        <Row>
          <Col md={12}>
            <PageHeader header={sport} />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <PlayerSelection
              players={grouplessPlayers}
              preSelectedPlayerIds={this.state.preSelectedPlayerIds}
              togglePreSelectToGroup={playerId => this.togglePreSelectToGroup(playerId)}
            />
          </Col>
          <Col md={6}>
            <Button onClick={e => this.createGroup(sport, e)}>
              Create group
            </Button>
            <SportGroups groups={sportGroups} players={players} />
          </Col>
        </Row>
      </div>
    );
  }
}

Sport.propTypes = {
  players: PropTypes.instanceOf(List).isRequired,
  groups: PropTypes.instanceOf(List).isRequired,
  createGroup: PropTypes.func.isRequired,
  createHoles: PropTypes.func.isRequired,
};

export default Sport;
