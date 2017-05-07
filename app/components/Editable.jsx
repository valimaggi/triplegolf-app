import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormControl } from 'react-bootstrap';

class Editable extends Component {
  finishEdit(value, onEdit) {
    if (onEdit && value.trim()) {
      onEdit(value);
    }
    return true;
  }

  checkEnter(e, onEdit) {
    if (e.key === 'Enter') {
      this.finishEdit(e.target.value, onEdit);
    }
    return true;
  }

  renderEdit() {
    return (
      <Row>
        <Col md={12}>
          <FormControl
            type="text"
            autoFocus
            defaultValue={this.props.value}
            onBlur={e => this.finishEdit(e.target.value, this.props.onEdit)}
            onKeyPress={e => this.checkEnter(e, this.props.onEdit)}
          />
        </Col>
      </Row>
    );
  }

  render() {
    const { editing, value, children } = this.props;
    return (
      <h4 className="list-group-item-heading">
        {editing ? this.renderEdit() : value}
        &nbsp;{children}
      </h4>
    );
  }
}

Editable.propTypes = {
  value: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  children: PropTypes.node
};

export default Editable;
