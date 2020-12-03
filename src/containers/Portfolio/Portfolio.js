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

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.
                    </p>

                    <div className="row">
                        <div className="col-4 col-12-mobile">
                            <PortfolioItem link="/" picUrl={pic02} picAlt=" " header="Lorem ipsum1"/>
                            <PortfolioItem link="/" picUrl={pic03} picAlt=" " header="Lorem ipsum2"/>
                        </div>
                        <div className="col-4 col-12-mobile">
                            <PortfolioItem link="/" picUrl={pic04} picAlt=" " header="Lorem ipsum3"/>
                            <PortfolioItem link="/" picUrl={pic05} picAlt=" " header="Lorem ipsum4"/>
                        </div>
                        <div className="col-4 col-12-mobile">
                            <PortfolioItem link="/" picUrl={pic06} picAlt=" " header="Lorem ipsum5"/>
                            <PortfolioItem link="/" picUrl={pic07} picAlt=" " header="Lorem ipsum6"/>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Portfolio;