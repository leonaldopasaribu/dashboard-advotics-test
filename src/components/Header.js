import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';

import logo from '../img/advotics-logo.jpg';
import avatar from '../img/Profile.svg';

function Header() {
	function buttonClicked(e) {
		e.preventDefault();
		console.log('The button was clicked.');
	}
    return (
        <Navbar sticky='top' className="nav">
				<Navbar.Brand href="#home">
					<img className="logo" src={logo} />
					<span className="powered">powered by</span>
					<img className="logo2" src={logo} />
				</Navbar.Brand>
				<Navbar.Collapse className="justify-content-end">
					<div className="navbar-text">
						<span className="user">Username</span>
						<span className="company">Company Name</span>
						<img alt="User" src={avatar} className="ava" />
						<button className="logout" onClick={buttonClicked}><img /></button>
					</div>
				</Navbar.Collapse>
			</Navbar>
    );
};

export default Header;