import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import { Row, Col } from 'react-bootstrap';
import Player from '../../components/Player';

class SelectablePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { preSelectedToGroup: false };
  }

  switchGroupPreselection(playerId, sport, isSelected) {}

  render() {
    const { player, sport } = this.props;
    const playerId = player.get('id');
    const checkboxStyle = { height: '30px', width: '30px' };
    return (
      <div>
        <Row>
          <Col xs={6} md={6}>
            <Player player={player} />
          </Col>
          <Col xs={2} md={2}>
            <input
              style={checkboxStyle}
              type="checkbox"
              checked={this.state.preSelectedToGroup}
              onChange={() => this.switchGroupPreselection(playerId, sport, !this.state.preSelectedToGroup)}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

SelectablePlayer.propTypes = {
  player: PropTypes.instanceOf(Map).isRequired,
  sport: PropTypes.string.isRequired,
};

export default SelectablePlayer;
