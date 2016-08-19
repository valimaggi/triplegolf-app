import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PlayerSelection from '../components/PlayerSelection.jsx';
import PageHeader from '../components/PageHeader.jsx';
import SportGroups from '../components/SportGroups.jsx';
import {createGroup} from '../actions/groups';
import {switchGroupPreselection, createHoles} from '../actions/players';
import {List} from 'immutable';

class Sport extends React.Component {
  render() {
    const { players, groups, sport, ...props} = this.props;

    const sportGroups = groups.filter(group => {
      return group.get('sport').get('name') === sport.name;
    })

    // Get the players who don't belong to any group in this sport
    const grouplessPlayers = players.filter(player => {
      const playerGroups = sportGroups.filter(group => {
        return (group.get('playerIds').indexOf(player.get('id')) >= 0)
      })
      return playerGroups.isEmpty();
    });

    return (
      <div>
        <div style={{width: '100%', float: 'left'}}>
          <PageHeader header={sport.header}/>
        </div>
        <div style={{width: '30%', float: 'left'}}>
          <PlayerSelection players={grouplessPlayers} sportName={sport.name}/>
        </div>
        <div style={{float: 'left'}}>
          <button
            onClick={this.groupCreation.bind(this, sport, players)}>
            Create group
          </button>
        </div>
        <div style={{float: 'left', marginLeft: '5%'}}>
          <SportGroups groups={sportGroups} players={players}/>
        </div>
      </div>
    );
  }

  groupCreation(sport, players, e) {
    e.stopPropagation();
    const selectedPlayers = players.filter(player => {
      return (player.get('sports').get(sport.name) !== undefined && player.get('sports').get(sport.name).get('preSelectedToGroup'));
    })
    const selectedPlayerIds = selectedPlayers.map(player => {
      return player.get('id');
    })

    selectedPlayerIds.forEach(playerId => {
      this.props.createHoles(playerId, sport.name, List());
    })

    this.props.createGroup({sport: sport, playerIds: selectedPlayerIds, currentHoleIndex: 0});
    selectedPlayerIds.map(playerId => this.props.switchGroupPreselection(playerId, sport.name, false));
  }
}

export default compose(
  connect((state, props) => ({
    players: state.players,
    groups: state.groups
  }), {
    createGroup,
    switchGroupPreselection,
    createHoles
  })
)(Sport);
