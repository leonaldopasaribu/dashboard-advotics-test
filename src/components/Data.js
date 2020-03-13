import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import ProdukBest from './ProdukBest.js';
import ProdukTop from './ProdukTop.js';
import Chart from './Chart.js';

function Data() {
    function buttonClicked(e) {
        e.preventDefault();
        console.log('The button was clicked.');
    }
    return (
        <div className="data row">
            <div className="chart">
                <span className="apv">AVERAGE PURCHASE VALUE</span>
                <Chart className="char-apv" />
            </div>

            <ProdukBest />

            <ProdukTop />
        </div>
    );
};

export default Data;

