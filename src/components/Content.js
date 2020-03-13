import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import cal from '../img/cal.png'

import MarketInsight from './MarketInsight';
import Sales from './Sales';
import Data from './Data';
import Calendar from '../calendar.js';
import Cals from '../cal.js';

function Content() {
    function buttonClicked(e) {
        e.preventDefault();
        console.log('The button was clicked.');
    }
    return (
        <div className="body-wrapper container">
            <div className="top-section row">
                <h1>Dashboard</h1>

                <div className="date-picker">
                    <img src={cal} className="cal-img" />
                    <span className="period">Period</span>
                    <Cals className="cal" />
                    <FontAwesomeIcon icon={faAngleDown} className="down" />
                </div>
            </div>
            
            <MarketInsight />
            <Sales />
            <Data />
        </div>
    );
};

export default Content;

