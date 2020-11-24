import React, {Component} from 'react';
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";

import pic02 from '../../assets/images/pic02.jpg';
import pic03 from '../../assets/images/pic03.jpg';
import pic04 from '../../assets/images/pic04.jpg';
import pic05 from '../../assets/images/pic05.jpg';
import pic06 from '../../assets/images/pic06.jpg';
import pic07 from '../../assets/images/pic07.jpg';

class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio" className="two">
                <div className="container">

                    <header>
                        <h2>Portfolio</h2>
                    </header>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur a purus non lectus vehicula vehicula.
                        Vestibulum faucibus risus vel hendrerit vestibulum.
                        Morbi ultrices, elit eu convallis sodales, lectus nulla suscipit nibh,
                        sed dapibus felis tortor non mauris.</p>

                    <div className="row">
                        <div className="col-4 col-12-mobile">
                            <PortfolioItem link="/" picUrl={pic02} picAlt=" " header="Lorem ipsum"/>
                            <PortfolioItem link="/" picUrl={pic03} picAlt=" " header="consectetur adipiscing"/>
                        </div>
                        <div className="col-4 col-12-mobile">
                            <PortfolioItem link="/" picUrl={pic04} picAlt=" " header="Magna Nullam"/>
                            <PortfolioItem link="/" picUrl={pic05} picAlt=" " header="Natoque Vitae"/>
                        </div>
                        <div className="col-4 col-12-mobile">
                            <PortfolioItem link="/" picUrl={pic06} picAlt=" " header="Dolor Penatibus"/>
                            <PortfolioItem link="/" picUrl={pic07} picAlt=" " header="Orci Convallis"/>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Portfolio;