import { connect } from 'react-redux';
import Sport from './Sport';
import { createGroup as createGroupAction } from '../../actions/groups';
import { createHoles as createHolesAction } from '../../actions/players';

const mapStateToProps = state => ({
  players: state.get('playersData'),
  groups: state.get('groupsData'),
});

const mapDispatchToProps = dispatch => ({
  createGroup(player) {
    dispatch(createGroupAction(player));
  },
  createHoles(updatedPlayer) {
    dispatch(createHolesAction(updatedPlayer));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sport);
