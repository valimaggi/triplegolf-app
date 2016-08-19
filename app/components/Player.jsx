import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import Editable from './Editable.jsx';
import * as playerActions from '../actions/players';

class Player extends React.Component {

  render() {
    const {player, ...props} = this.props;
    const playerId = player.get('id');
    const playerShots = player.get('shots');

    return (
      <div {...props}>
        <div className="player-header"
          onClick={() => props.updatePlayer({id: playerId, editing: true})}>
          <Editable className="player-name" editing={player.get('editing')}
            value={player.get('name')}
            onEdit={name => props.updatePlayer({id: playerId, name, editing: false})} />
          <div className="player-delete">
            <button onClick={this.deletePlayer.bind(this, player)}>x</button>
          </div>
        </div>
        <div>
          <div className="player-shots">
            {player.get('shots')}
          </div>
        </div>
      </div>
    );
  }
  deletePlayer(player, e) {
    e.stopPropagation();
    const playerId = player.get('id');
    this.props.deletePlayer(playerId);
  }

}

export default compose(
  // If you want to memoize this (more performant),
  // use https://www.npmjs.com/package/reselect
  connect((state, props) => ({}), {
    ...playerActions
  })
)(Player);
