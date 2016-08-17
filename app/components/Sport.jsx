import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PlayerSelection from '../components/PlayerSelection.jsx';
import PageHeader from '../components/PageHeader.jsx';
import SportGroups from '../components/SportGroups.jsx';
import {createGroup} from '../actions/groups';
import {switchGroupPreselection} from '../actions/players';

class Sport extends React.Component {
  render() {
    const {sportName, sportHeader, players, groups, ...props} = this.props;

    const sportGroups = groups.filter(group => {
      return group.get('sport') === sportName;
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
          <PageHeader name={sportHeader}/>
        </div>
        <div style={{width: '30%', float: 'left'}}>
          <PlayerSelection players={grouplessPlayers} sport={sportName}/>
        </div>
        <div style={{float: 'left'}}>
          <button
            onClick={this.groupCreation.bind(this, sportName, players)}>
            Create group
          </button>
        </div>
        <div style={{float: 'left', marginLeft: '5%'}}>
          <SportGroups groups={sportGroups} players={players} sport={sportName}/>
        </div>
      </div>
    );
  }

  groupCreation(sportName, players, e) {
    e.stopPropagation();
    const selectedPlayers = players.filter(player => {
      return (player.get('sports').get(sportName) !== undefined && player.get('sports').get(sportName).get('preSelectedToGroup'));
    })
    const selectedPlayerIds = selectedPlayers.map(player => {
      return player.get('id');
    })

    this.props.createGroup({sport: sportName, playerIds: selectedPlayerIds});
    selectedPlayerIds.map(playerId => this.props.switchGroupPreselection(playerId, sportName, false));
  }
}

export default compose(
  connect((state, props) => ({
    players: state.players,
    groups: state.groups,
    sportName: props.sport.name,
    sportHeader: props.sport.header
  }), {
    createGroup,
    switchGroupPreselection
  })
)(Sport);
