import { connect } from 'react-redux';
import Home from './Home';
import {
  createPlayer as createPlayerAction,
  updatePlayer as updatePlayerAction,
  deletePlayer as deletePlayerAction
} from '../../actions/players';

const mapStateToProps = state => ({
  players: state.get('playersData')
});

const mapDispatchToProps = dispatch => ({
  createPlayer(player) {
    dispatch(createPlayerAction(player));
  },
  updatePlayer(updatedPlayer) {
    dispatch(updatePlayerAction(updatedPlayer));
  },
  deletePlayer(id) {
    dispatch(deletePlayerAction(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
