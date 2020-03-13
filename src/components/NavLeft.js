import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import sidebar from '../img/side.svg';
import dash from '../img/dashboard.svg';

function NavLeft() {
    function buttonClicked(e) {
        e.preventDefault();
        console.log('The button was clicked.');
    }
    return (
        <div className="navigation-left">
            <a><img src={sidebar} className="sidebar-menu" /></a>
            <a className="highlight" onClick={buttonClicked} href="#" ><div className="rectangle"><img src={dash} className="dashboard-menu" /></div></a>
        </div>
    );
};

export default NavLeft;