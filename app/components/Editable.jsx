import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormControl, Glyphicon } from 'react-bootstrap';

class Editable extends Component {
  finishEdit(e, onEdit) {
    const value = e.target.value;

    if (onEdit && value.trim()) {
      onEdit(value);
    }
    return true;
  }

  checkEnter(e, onEdit) {
    if (e.key === 'Enter') {
      this.finishEdit(e, onEdit);
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
            onBlur={e => this.finishEdit(e, this.props.onEdit)}
            onKeyPress={e => this.checkEnter(e, this.props.onEdit)}
          />
        </Col>
      </Row>
    );
  }

  render() {
    const { editing } = this.props;
    return (
      <h4 className="list-group-item-heading">
        {editing ? this.renderEdit() : this.props.value}
        &nbsp;{!editing && <Glyphicon bsClass="glyphicon glyphicon-pencil smaller-glyphicon" glyph="pencil" />}
      </h4>
    );
  }
}

Editable.propTypes = {
  value: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
};

export default Editable;
