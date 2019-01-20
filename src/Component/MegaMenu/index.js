import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      image:'graphics-t-shirt'
    }
  }
  handleMouseEnter = (imageName) => {
    this.setState({
      image:imageName
    })
  }
  render() {
    return (
      <Navbar inverse collapse OnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1}>
              <NavLink to='/' activeClassName="active">
              Link
              </NavLink>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown" className="mega-dropdown-menu" >
                <div className="mega-menu container">
                  <div className="mega-menu-list">
                  <div className="col-lg-3">
                    <MenuItem eventKey={3.1} className="menu-heading"><strong>Topwear</strong></MenuItem>
                    <MenuItem eventKey={3.2} onMouseEnter={() => this.handleMouseEnter('graphics-t-shirt')}>Graphics T-shirts</MenuItem>
                    <MenuItem eventKey={3.2} onMouseEnter={() => this.handleMouseEnter('full-sleeve-t-shirt')}>Full Sleeves T-shirts</MenuItem>
                    <MenuItem eventKey={3.2} onMouseEnter={() => this.handleMouseEnter('plain-t-shirt')}>Plain T-shirts</MenuItem>
                    <MenuItem eventKey={3.2} onMouseEnter={() => this.handleMouseEnter('hoodies')}>Hoddies</MenuItem>
                    <MenuItem eventKey={3.2} onMouseEnter={() => this.handleMouseEnter('shirts')}>Shirts</MenuItem>
                  </div>
                  <div className="col-lg-3">  
                    <MenuItem eventKey={3.1} className="menu-heading"><strong>Bottomwear</strong></MenuItem>
                    <MenuItem eventKey={3.2}>Joggers</MenuItem>
                    <MenuItem eventKey={3.2}>Pants & Trousers</MenuItem>
                    <MenuItem eventKey={3.2}>Shorts</MenuItem>
                  </div>
                  <div className="col-lg-3">
                    <MenuItem eventKey={3.1} className="menu-heading"><strong>Footwear</strong></MenuItem>
                    <MenuItem eventKey={3.2}>Shoes</MenuItem>
                    <MenuItem eventKey={3.2}>Slippers</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                  </div>
                  </div>
                  <div className="col-lg-3">
                    <img src={`/assets/images/${this.state.image}.jpg`} alt="" className="product-image"/>
                  </div>
                </div>
              </NavDropdown>
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default App;
