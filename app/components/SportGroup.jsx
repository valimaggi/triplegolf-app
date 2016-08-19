import React from 'react';
import {Link} from 'react-router';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PlayerBox from './PlayerBox.jsx';
import * as GroupActions from '../actions/groups';

class SportGroup extends React.Component {

  render() {
    const {group, players, ...props} = this.props;
    const groupPlayers = players.filter(player => {
      return group.get('playerIds').findIndex(id => id === player.get('id')) >= 0;
    });

    return (
      <div>
        <Link className='group-link' to={'/group/' + group.get('id')} >
          <div style={{borderStyle: 'solid', padding: '5px', marginBottom: '15px', width: '80%', display: 'inline-block'}}
            >
            {groupPlayers.map(player =>
              <div key={player.get('id')}>
                <PlayerBox key={player.get('id')} name={player.get('name')} shots={player.get('shots')} />
                <br/>
              </div>
            )}
          </div>
        </Link>
        <div style={{display: 'inline-block', marginBottom: '15px'}}>
          <button onClick={this.deleteGroup.bind(this, group)}>X</button>
        </div>
      </div>
    );
  }
  deleteGroup(group, e) {
    e.stopPropagation();
    const groupId = group.get('id');
    this.props.deleteGroup(groupId);
  }

}

export default compose(
  // If you want to memoize this (more performant),
  // use https://www.npmjs.com/package/reselect
  connect((state, props) => ({}), {
    ...GroupActions
  })
)(SportGroup);
