import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {createPlayer} from '../actions/players';
import Players from '../components/Players.jsx';
import {Map} from 'immutable';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          Pick a sport from the navigation or create a new player.
        </div>
        <br/>
        <div>
          <button
            onClick={this.props.createPlayer.bind(null, {
              name: 'New player',
              shots: 0,
              sports: Map()
            })}>+</button>
          <Players players={this.props.players} />
        </div>
      </div>
    );
  }
}
export default compose(
  connect(state => ({
    players: state.players
  }), {
    createPlayer
  })
)(Home);
