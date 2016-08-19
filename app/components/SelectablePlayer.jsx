import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {switchGroupPreselection} from '../actions/players';
import PlayerBox from '../components/PlayerBox.jsx';

class SelectablePlayer extends React.Component {

  render() {
    const {player, sportName, ...props} = this.props;
    const playerId = player.get('id');
    const checkboxCheck = player.get('sports').get(sportName) !== undefined ? player.get('sports').get(sportName).get('preSelectedToGroup') : false;
    const playerBoxStyle = {
      padding: 15,
      margin: 5,
      color: '#efefef',
      backgroundColor: '#333',
      borderRadius: '0.5em',
      width: '60%',
      display: 'inline-block'
    };
    const checkboxStyle = {
      padding: 3,
      margin: 5,
      display: 'inline-block'
    }
    return (
      <div style={{}}>
          <div style={playerBoxStyle}>
            <PlayerBox name={player.get('name')} shots={player.get('shots')} />
          </div>
          <div style={checkboxStyle}>
            <input style={{height: '30px',width: '30px'}} type="checkbox"
              checked={checkboxCheck}
              onChange={() => props.switchGroupPreselection(playerId, sportName, !checkboxCheck)}/>
          </div>
      </div>
    );
  }
}

export default compose(
  // If you want to memoize this (more performant),
  // use https://www.npmjs.com/package/reselect
  connect((state, props) => ({}), {
    switchGroupPreselection
  })
)(SelectablePlayer);
