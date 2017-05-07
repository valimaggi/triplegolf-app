import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import holes from '../../constants/holes';

class Group extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  changeHole(group, holeIndexIncrement, maxHoleIndex, e) {
    e.stopPropagation();
    const newHoleIndex = group.get('currentHoleIndex') + holeIndexIncrement;
    if (newHoleIndex >= 0 && newHoleIndex <= maxHoleIndex) {

    }
  }
  render() {
    const { groups, players, updatePlayer, ...props } = this.props;
    const group = groups.find(groupElem => groupElem.get('id') === props.params.id);
    const groupPlayers = players.filter(player => group.get('playerIds').includes(player.get('id')));
    const holeNumberParMap = holes[group.get('sport')];
    const holeNumbers = Object.keys(holeNumberParMap);
    const maxHoleIndex = holeNumbers.length - 1;
    const holeIndex = group.get('currentHoleIndex');

    return (
      <div>
        <h2>Group</h2>
        <h3>{group.get('sport')}</h3>
        <h4>Hole {holeNumbers[holeIndex]} - Par {holeNumberParMap[holeIndex+1]}</h4>
        <div>
          <span onClick={() => this.changeHole(group, -1, maxHoleIndex)}>Prev</span> -
          <span onClick={() => this.changeHole(group, 1, maxHoleIndex)}>Next</span>
        </div>
        <div>
          {groupPlayers.map(player =>
            <div key={player.get('id')}>
              <div key={player.get('id')}>
              </div>
              <div>
                <button onClick={() => props.updatePlayer({id: player.get('id'), shots: player.get('shots')-1})}>-</button>
                <button onClick={() => props.updatePlayer({id: player.get('id'), shots: player.get('shots')+1})}>+</button>
              </div>
              <br />
            </div>
          )}
        </div>
      </div>
    );
  }
}

Group.propTypes = {
  groups: PropTypes.instanceOf(List).isRequired,
  players: PropTypes.instanceOf(List).isRequired,
  updatePlayer: PropTypes.func.isRequired
};

export default Group;
