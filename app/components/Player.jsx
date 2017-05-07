import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
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
    const { player, updatePlayer, deletePlayer, isNameOnly } = this.props;
    const id = player.get('id');
    const playerShots = player.get('shots');
    const updateable = !isNameOnly && updatePlayer;
    const deletable = !isNameOnly && deletePlayer;

    return (
      <ListGroupItem>
        <Row>
          <Col
            md={10}
            onClick={() => {
              if (updateable) {
                this.toggleEditing(true);
              }
            }}
          >
            <Editable
              editing={this.state.editing}
              value={player.get('name')}
              onEdit={(name) => {
                if (updateable) {
                  updatePlayer({ id, name });
                  this.toggleEditing(false);
                }
              }}
            />
          </Col>
          <Col md={2}>
            {deletable &&
              <Button bsSize="xsmall" bsStyle="danger" className="pull-right">
                <Glyphicon glyph="remove" onClick={() => deletePlayer(id)} />
              </Button>}
          </Col>
        </Row>
        {!isNameOnly &&
          <Row><Col md={12}>Shots: {playerShots}</Col></Row>
        }
      </ListGroupItem>
    );
  }
}

Player.propTypes = {
  player: PropTypes.instanceOf(Map).isRequired,
  updatePlayer: PropTypes.func,
  deletePlayer: PropTypes.func,
  isNameOnly: PropTypes.bool
};

export default Player;
