import { connect } from 'react-redux';
import Home from './Home';
import { createPlayer, updatePlayer, deletePlayer } from '../../actions/players';

const mapStateToProps = state => ({
  players: state.get('playersData'),
});

const mapDispatchToProps = dispatch => ({
  createPlayer(player) {
    dispatch(createPlayer(player));
  },
  updatePlayer(updatedPlayer) {
    dispatch(updatePlayer(updatedPlayer));
  },
  deletePlayer(id) {
    dispatch(deletePlayer(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
