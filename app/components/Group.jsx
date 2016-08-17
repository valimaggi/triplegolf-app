import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PlayerBox from './PlayerBox.jsx';
import * as GroupActions from '../actions/groups';
import {updatePlayer} from '../actions/players';

class Group extends React.Component {

  render() {
    const {group, players, ...props} = this.props;
    const groupPlayers = players.filter(player => {
      return group.get('playerIds').findIndex(id => id === player.get('id')) >= 0
    });
    const playerBoxStyle = {
      padding: 15,
      margin: 5,
      color: '#efefef',
      backgroundColor: '#333',
      borderRadius: '0.5em',
      width: '50%',
      display: 'inline-block'
    };

    return (
      <div>
        <h2>Group</h2>
        <h3>{group.get('sport')}</h3>
        <div style={{width: '30%'}}>
          {groupPlayers.map(player =>
            <div key={player.get('id')}>
              <div key={player.get('id')} style={playerBoxStyle}>
                <PlayerBox key={player.get('id')} name={player.get('name')} shots={player.get('shots')} />
              </div>
              <div style={{display: 'inline-block'}}>
                <button onClick={() => props.updatePlayer({id: player.get('id'), shots: player.get('shots')+1})}>+</button>
                <button onClick={() => props.updatePlayer({id: player.get('id'), shots: player.get('shots')-1})}>-</button>
              </div>
              <br/>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default compose(
  connect((state, props) => ({
    group: state.groups.get(state.groups.findIndex(group => group.get('id') === props.params.id)),
    players: state.players
  }), {
    ...GroupActions,
    updatePlayer
  })
)(Group);
