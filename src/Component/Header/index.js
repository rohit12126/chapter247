import React,{ Component } from 'react';
import {NavLink} from 'react-router-dom';
//import './Header.css';

class Header extends Component{
    constructor(){
        super();
        this.state = {
            menu: false
        }
    }
    handleClick = () => {
        console.log("hghj")
        this.setState({
            menu:true
        });
    }
    render(){
        return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" onClick={this.handleClick}>Dropdown</a>
                    {/* <NavLink to="/about"  className="nav-link" exact >About</NavLink> */}
                    {this.state.menu ? <div>
									<ul className="mega-dropdown-menu images row">
									<li className="col-sm-3">
										<ul>
											<li className="dropdown-header">Dresses</li>
											<li><a href="#">Unique Features</a></li>
											<li><a href="#">Image Responsive</a></li>
											<li><a href="#">Auto Carousel</a></li>
											<li><a href="#">Newsletter Form</a></li>
											<li><a href="#">Four columns</a></li>
											<li className="divider"></li>
											<li className="dropdown-header">Tops</li>
											<li><a href="#">Good Typography</a></li>
										</ul>
									</li>
									<li className="col-sm-3">
										<ul>
											<li className="dropdown-header">Jackets</li>
											<li><a href="#">Easy to customize</a></li>
											<li><a href="#">Glyphicons</a></li>
											<li><a href="#">Pull Right Elements</a></li>
											<li className="divider"></li>
											<li className="dropdown-header">Pants</li>
											<li><a href="#">Coloured Headers</a></li>
											<li><a href="#">Primary Buttons & Default</a></li>
											<li><a href="#">Calls to action</a></li>
										</ul>
									</li>
									<li className="col-sm-3">
										<ul>
											<li className="dropdown-header">Accessories</li>
											<li><a href="#">Default Navbar</a></li>
											<li><a href="#">Lovely Fonts</a></li>
											<li><a href="#">Responsive Dropdown </a></li>
											<li className="divider"></li>
											<li className="dropdown-header">Newsletter</li>
										</ul>
									</li>
								</ul>
								<img src="./../../assets/images/image.jpg" alt="" /></div>: null}
							
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>)}
}
export default Header;