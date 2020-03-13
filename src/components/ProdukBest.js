import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import more from '../img/more.svg'
import product from '../img/product.png'

function ProdukBest() {
    function buttonClicked(e) {
        e.preventDefault();
        console.log('The button was clicked.');
    }

    return (
        <div className="list-prod container">
            <span className="title">BEST SELLING SKU</span>
            <a className="menu-dot" href="#" onClick={buttonClicked}><img src={more} /></a>
            <div className="list">
                <div className="best-prod  row">
                    <img className="prod-img-first" src={product} />
                    <span className="prod-name-first">Yoghurt D</span>
                    <span className="prod-info-first">Rp 10.000</span>
                    <span className="prod-info-first jml">100 pcs</span>
                </div>

                <div className="prod  row">
                    <img className="prod-img" src={product} />
                    <span className="prod-name">Yoghurt A</span>
                    <span className="prod-info">Rp 10.000</span>
                    <span className="prod-info jml2">100 pcs</span>
                </div>

                <div className="prod  row">
                    <img className="prod-img" src={product} />
                    <span className="prod-name">Yoghurt B</span>
                    <span className="prod-info">Rp 10.000</span>
                    <span className="prod-info jml2">100 pcs</span>
                </div>

                <div className="prod  row">
                    <img className="prod-img" src={product} />
                    <span className="prod-name">Yoghurt C</span>
                    <span className="prod-info">Rp 10.000</span>
                    <span className="prod-info jml2">100 pcs</span>
                </div>

                <div className="prod  row">
                    <img className="prod-img" src={product} />
                    <span className="prod-name">Yoghurt E</span>
                    <span className="prod-info">Rp 10.000</span>
                    <span className="prod-info jml2">100 pcs</span>
                </div>
            </div>
        </div>
    );
};

export default ProdukBest;



