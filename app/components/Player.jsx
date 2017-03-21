import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import { Row, Col, ListGroupItem, Button, Glyphicon } from 'react-bootstrap';

import Editable from './Editable';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  toggleEditing(editing) {
    this.setState(() => ({ editing }));
  }

  render() {
    const { player, updatePlayer, deletePlayer } = this.props;
    const id = player.get('id');
    const playerShots = player.get('shots');

    return (
      <ListGroupItem>
        <Row>
          <Col
            md={10}
            onClick={() => {
              if (updatePlayer) {
                this.toggleEditing(true);
              }
            }}
          >
            <Editable
              editing={this.state.editing}
              value={player.get('name')}
              onEdit={(name) => {
                if (updatePlayer) {
                  updatePlayer({ id, name });
                  this.toggleEditing(false);
                }
              }}
            />
          </Col>
          <Col md={2}>
            {deletePlayer &&
              <Button bsSize="xsmall">
                <Glyphicon glyph="remove" onClick={() => deletePlayer(id)} />
              </Button>}
          </Col>
        </Row>
        <Row><Col md={12}>Shots: {playerShots}</Col></Row>
      </ListGroupItem>
    );
  }
}

Player.propTypes = {
  player: PropTypes.instanceOf(Immutable.Map).isRequired,
  updatePlayer: PropTypes.func,
  deletePlayer: PropTypes.func,
};

export default Player;
