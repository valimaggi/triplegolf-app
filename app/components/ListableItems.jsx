import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ListGroup } from 'react-bootstrap';

const ListableItems = ({ colWidthMd, children }) => (
  <Row>
    <Col md={colWidthMd}>
      <ListGroup>
        {children}
      </ListGroup>
    </Col>
  </Row>
);

ListableItems.propTypes = {
  colWidthMd: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

ListableItems.defaultProps = {
  colWidthMd: 6
};

export default ListableItems;
