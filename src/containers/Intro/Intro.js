import React, {Component} from 'react';
import ButtonJam from "../../components/UI/Button/ButtonJam";

class Intro extends Component {
    render() {
        return (
            <section id="top" className="one dark cover">
                <div className="container">

                    <header>
                        <h2 className="alt">Hi! I'm <strong>Sayyed Jamal Ghasemi</strong>, a Full Stack Developer<br />
                        Created it resume tamplate <strong>By reactjs</strong> </h2>
                        <p>I have been interested in programming since I was a child</p>
                    </header>

                    <footer>
                        <ButtonJam link="/portfolio">Portfolio</ButtonJam>
                    </footer>

                </div>
            </section>
        );
    }
}

export default Intro;