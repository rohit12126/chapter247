import React, { Component } from 'react';
import './MegaMenu.css';

class MegaMenu extends Component {
	constructor(){
		super();
		this.state = {
			menu:false
		}
	}
	handleClick = () => {
		console.log("handleClick");
		this.setState((state) => {
			return {menu:!state.menu}
		})
	}
	render() {
		return (
			<div className="container">
				<nav className="navbar navbar-default">
					<div className="navbar-header">
						<button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">MegaMenu</a>
					</div>
			
					<div className="collapse navbar-collapse js-navbar-collapse">
						<ul className="nav navbar-nav">
							<li className="dropdown mega-dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">Collection <span className="glyphicon glyphicon-chevron-down pull-right" onClick={this.handleClick}></span></a>
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
				</nav>
				m,mmklkmknnmnmnmmnm
			</div>
		)
	}
}

export default MegaMenu;