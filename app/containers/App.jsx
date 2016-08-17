import React from 'react';
import {Link} from 'react-router';
import {slide as Menu} from 'react-burger-menu';
import Radium from 'radium';

let RadiumLink = Radium(Link);
const activeLinkStyle = {
  color: '#90EE90',
  display: 'block',
  outline: 'none'
}
const Nav = () => (
  <div>
    <Menu>
      <RadiumLink className="menu-item" to="/">Home</RadiumLink>
      <RadiumLink className="menu-item" activeStyle={activeLinkStyle} to="/golf">Golf</RadiumLink>
      <RadiumLink className="menu-item" activeStyle={activeLinkStyle} to="/discgolf">Discgolf</RadiumLink>
      <RadiumLink className="menu-item" activeStyle={activeLinkStyle} to="/minigolf">Minigolf</RadiumLink>
    </Menu>
  </div>
)

class App extends React.Component {

  render() {
    return (
      <div>
        <Nav/>
        <div style={{margin: 'auto', width: '60%'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
