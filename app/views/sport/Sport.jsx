import React, { Component, PropTypes } from 'react';
import { List, Map } from 'immutable';
import { Row, Col, ListGroupItem, Button, Glyphicon } from 'react-bootstrap';
import PlayerSelection from '../../components/PlayerSelection';
import PageHeader from '../../components/PageHeader';
import SportGroups from '../../components/SportGroups';

class Sport extends Component {
  constructor(props) {
    super(props);
    this.state = { preSelectedPlayerIds: [] };
  }
  groupCreation(sport, players, e) {
    e.stopPropagation();
    const selectedPlayers = players.filter(
      player => player.get('sports').get(sport.name) !== undefined && player.get('sports').get(sport.name).get('preSelectedToGroup'),
    );
    const selectedPlayerIds = selectedPlayers.map(player => player.get('id'));

    selectedPlayerIds.forEach((playerId) => {
      this.props.createHoles(playerId, sport.name, List());
    });

    this.props.createGroup({ sport: sport, playerIds: selectedPlayerIds, currentHoleIndex: 0 });
    // selectedPlayerIds.map(playerId => this.props.switchGroupPreselection(playerId, sport.name, false));
  }

  render() {
    const { players, groups, ...props } = this.props;
    const sport = props.params.path;
    const sportGroups = groups.filter(group => group.get('sport').get('name') === sport);
    const grouplessPlayers = players.filter(player => sportGroups.filter(group => group.get('playerIds').includes(player.get('id'))));

    return (
      <div>
        <div style={{ width: '100%', float: 'left' }}>
          <PageHeader header={sport} />
        </div>
        <div style={{ width: '30%', float: 'left' }}>
          <PlayerSelection players={grouplessPlayers} sportName={sport} />
        </div>
        <div style={{ float: 'left' }}>
          <button onClick={e => this.groupCreation(sport, players, e)}>
            Create group
          </button>
        </div>
        <div style={{ float: 'left', marginLeft: '5%' }}>
          <SportGroups groups={sportGroups} players={players} />
        </div>
      </div>
    );
  }
}

Sport.propTypes = {
  players: PropTypes.instanceOf(List).isRequired,
  groups: PropTypes.instanceOf(List).isRequired,
  sport: PropTypes.instanceOf(Map).isRequired,
  createGroup: PropTypes.func.isRequired,
  createHoles: PropTypes.func.isRequired,
};

export default Sport;
