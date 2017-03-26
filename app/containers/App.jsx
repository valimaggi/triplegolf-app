import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { slide as Menu } from 'react-burger-menu';
import Radium from 'radium';
import { Row, Col } from 'react-bootstrap';

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
      <RadiumLink className="menu-item" activeStyle={activeLinkStyle} to="/golf">
        Golf
      </RadiumLink>
      <RadiumLink className="menu-item" activeStyle={activeLinkStyle} to="/discgolf">
        Discgolf
      </RadiumLink>
      <RadiumLink className="menu-item" activeStyle={activeLinkStyle} to="/minigolf">
        Minigolf
      </RadiumLink>
    </Menu>
  </div>
);

const App = ({ children }) => (
  <div>
    <Row>
      <Col md={2}>
        <Nav />
      </Col>
      <Col md={10}>
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
