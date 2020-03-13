import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import help from '../img/Help.png';

function MarketInsight() {
    function buttonClicked(e) {
        e.preventDefault();
        console.log('The button was clicked.');
    }
    return (
        <div className="market-insight container row">
            <div className="row">
                <span className="col-lg mi-title">MARKET INSIGHTS</span>
                <img className="col- help" src={help} />
                <a className="col- click" href="#">Click Here for Help</a>
                <button className="col-sm- arrowup" onClick={buttonClicked}><FontAwesomeIcon icon={faAngleUp} /></button>
            </div>
        </div>
    );
};

export default MarketInsight;