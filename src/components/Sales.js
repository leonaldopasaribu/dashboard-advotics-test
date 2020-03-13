import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';

import sales from '../img/group.svg';
import trolley from '../img/SalesTurnover.svg';

function Sales() {
    function buttonClicked(e) {
        e.preventDefault();
        console.log('The button was clicked.');
    }
    return (
        <div className="sales row">
            <img className="sales-img" src={sales} />
            <img className="trolley" src={trolley} />
        </div>
    );
};

export default Sales;

