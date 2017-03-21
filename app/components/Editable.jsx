import React, { Component, PropTypes } from 'react';

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
      <input
        type="text"
        ref={e => (e ? (e.selectionStart = this.props.value.length) : null)}
        autoFocus
        defaultValue={this.props.value}
        onBlur={e => this.finishEdit(e, this.props.onEdit)}
        onKeyPress={e => this.checkEnter(e, this.props.onEdit)}
      />
    );
  }

  render() {
    const { editing } = this.props;
    return (
      <h4 className="list-group-item-heading">
        {editing ? this.renderEdit() : this.props.value}
      </h4>
    );
  }
}

Editable.propTypes = {
  value: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired
};

export default Editable;
