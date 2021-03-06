import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Row, Col, Button, Glyphicon } from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';
import PlayerSelection from './PlayerSelection';
import PageHeader from '../../components/PageHeader';
import SportGroups from './SportGroups';
import { togglePreSelectToGroup } from './stateChanges';
import { grouplessPlayersOfSport } from '../../util/helpers';

class Sport extends Component {
  constructor(props) {
    super(props);
    this.state = { preSelectedPlayerIds: [] };
  }

  componentWillReceiveProps() {
    this.setState(() => ({ preSelectedPlayerIds: [] }));
  }

  togglePreSelectToGroup(playerId) {
    this.setState(togglePreSelectToGroup(playerId));
  }

  createGroup(sport, e) {
    e.stopPropagation();
    this.props.createGroup({ sport: sport, playerIds: this.state.preSelectedPlayerIds });
  }

  render() {
    const { players, groups, deleteGroup, ...props } = this.props;
    const sport = props.params.path;
    const sportGroups = groups.filter(group => group.get('sport') === sport);
    const grouplessPlayers = grouplessPlayersOfSport(players, sportGroups);
    return (
      <div>
        <Row>
          <Col md={12}>
            <PageHeader header={sport} />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2>Groups</h2>
            <SportGroups groups={sportGroups} players={players} deleteGroup={deleteGroup} />
          </Col>
          <Col md={3}>
            <PlayerSelection
              players={grouplessPlayers}
              preSelectedPlayerIds={this.state.preSelectedPlayerIds}
              togglePreSelectToGroup={playerId => this.togglePreSelectToGroup(playerId)}
            />
          </Col>
          <Col md={2}>
            <Button onClick={e => this.createGroup(sport, e)} disabled={isEmpty(this.state.preSelectedPlayerIds)}>
              Create group &nbsp; <Glyphicon glyph="plus" />
            </Button>
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
  deleteGroup: PropTypes.func.isRequired
};

export default Sport;
