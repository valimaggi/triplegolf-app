import { connect } from 'react-redux';
import Group from './Group';
import { updatePlayer } from '../../actions/players';

const mapStateToProps = state => ({
  groups: state.get('groupsData'),
  players: state.get('playersData'),
});

const mapDispatchToProps = dispatch => ({
  updatePlayer(updatedPlayer) {
    dispatch(updatePlayer(updatedPlayer));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Group);
