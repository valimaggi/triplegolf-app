import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PlayerBox from './PlayerBox.jsx';
import * as groupActions from '../actions/groups';
import {updatePlayer} from '../actions/players';
import holes from '../constants/holes';

class Group extends React.Component {

  render() {
    const {group, players, ...props} = this.props;
    const groupPlayers = players.filter(player => {
      return group.get('playerIds').findIndex(id => id === player.get('id')) >= 0
    });
    const sportHoles = holes[group.get('sport').get('name')];
    const holeNumbers = Object.keys(sportHoles);
    const maxHoleIndex = holeNumbers.length()-1;
    const holeIndex = group.get('currentHoleIndex');
    const playerBoxStyle = {
      padding: 15,
      margin: 5,
      color: '#efefef',
      backgroundColor: '#333',
      borderRadius: '0.5em',
      width: '50%',
      display: 'inline-block'
    };
    let prevStyle;
    let nextStyle;
    const hidePrevNextStyle = {
      visibility: 'hidden'
    }
    if(holeIndex === 0) {
      prevStyle = hidePrevNextStyle;
    } else if(holeIndex === maxHoleIndex) {
      nextStyle = hidePrevNextStyle;
    }

    return (
      <div>
        <h2>Group</h2>
        <h3>{group.get('sport').get('header')}</h3>
        <h4>Hole {holeNumbers[holeIndex]} - Par {sportHoles[holeIndex+1]}</h4>
        <div>
          <span style={prevStyle} onClick={this.changeHole.bind(this, group, -1, maxHoleIndex)}>Prev</span> -
          <span style={nextStyle} onClick={this.changeHole.bind(this, group, 1, maxHoleIndex)}>Next</span>
        </div>
        <div style={{width: '30%'}}>
          {groupPlayers.map(player =>
            <div key={player.get('id')}>
              <div key={player.get('id')} style={playerBoxStyle}>
                <PlayerBox key={player.get('id')} name={player.get('name')} shots={player.get('shots')} />
              </div>
              <div style={{display: 'inline-block'}}>
                <button onClick={() => props.updatePlayer({id: player.get('id'), shots: player.get('shots')-1})}>-</button>
                <button onClick={() => props.updatePlayer({id: player.get('id'), shots: player.get('shots')+1})}>+</button>
              </div>
              <br/>
            </div>
          )}
        </div>
      </div>
    );
  }

  changeHole(group, holeIndexIncrement, maxHoleIndex, e) {
    e.stopPropagation();

    const newHoleIndex = group.get('currentHoleIndex') + holeIndexIncrement;
    if(holeIndexIncrement >= 0 && holeIndexIncrement <= maxHoleIndex) {
      this.props.changeCurrentHole(group.get('id'), newHoleIndex);
    }
  }
}

export default compose(
  connect((state, props) => ({
    group: state.groups.get(state.groups.findIndex(group => group.get('id') === props.params.id)),
    players: state.players
  }), {
    ...groupActions,
    updatePlayer
  })
)(Group);
