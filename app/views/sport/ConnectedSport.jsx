import { connect } from 'react-redux';
import Sport from './Sport';
import { createGroup, deleteGroup } from '../../actions/groups';

const mapStateToProps = state => ({
  players: state.get('playersData'),
  groups: state.get('groupsData'),
});

const mapDispatchToProps = dispatch => ({
  createGroup(group) {
    dispatch(createGroup(group));
  },
  deleteGroup(id) {
    dispatch(deleteGroup(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Sport);
