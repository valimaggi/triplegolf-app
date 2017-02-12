import { connect } from 'react-redux';
import Home from './Home';
import { createPlayer } from '../../actions/players';

const mapStateToProps = state => ({
  players: state.get('players')
});

const mapDispatchToProps = dispatch => ({
  createPlayer(player) {
    dispatch(createPlayer(player));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
