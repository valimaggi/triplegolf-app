import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { slide as Menu } from 'react-burger-menu';
import Radium from 'radium';
import { Row, Col } from 'react-bootstrap';
import { GOLF, DISCGOLF, MINIGOLF } from '../constants/sports';
import { createPath } from '../util/helpers';

const RadiumLink = Radium(Link);
const activeLinkStyle = {
  color: '#90EE90',
  display: 'block',
  outline: 'none',
};
const Nav = () => (
  <div>
    <Menu isOpen={false}>
      <RadiumLink className="menu-item" to="/">Home</RadiumLink>
      <RadiumLink className="menu-item" activeStyle={activeLinkStyle} to={createPath(GOLF)}>
        Golf
      </RadiumLink>
      <RadiumLink className="menu-item" activeStyle={activeLinkStyle} to={createPath(DISCGOLF)}>
        Discgolf
      </RadiumLink>
      <RadiumLink className="menu-item" activeStyle={activeLinkStyle} to={createPath(MINIGOLF)}>
        Minigolf
      </RadiumLink>
    </Menu>
  </div>
);

const App = ({ children }) => (
  <div>
    <Row>
      <Col xs={2} md={2}>
        <Nav />
      </Col>
      <Col xs={10} md={10}>
        <Row>
          <Col md={12}>
            {children}
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
