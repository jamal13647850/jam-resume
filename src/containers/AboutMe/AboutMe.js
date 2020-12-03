import React, {Component} from 'react';
import  bg from '../../assets/images/pic0808.jpg';

class AboutMe extends Component {
    render() {
        return (
            <section id="about" className="three">
                <div className="container">
                    <header>
                        <h2>About me</h2>
                    </header>

                    <a href="/" className="image featured">
                        <img style={{maxHeight:"500px"}} src={bg} alt="" />
                    </a>

                    <p>
                    From the end of my childhood and the beginning of my adolescence, I entered the field of hardware and software due to my personal interest. I am proficient in a large number of software under Windows and Linux. At the beginning, I entered programming with assembly, C and B language, and later Visual Basic and Delphi, and in general, I entered the field of programming under Windows, and in 2010, I entered the field of web programming. I have increased my knowledge and I am now familiar with a significant number of technologies, methods and languages to the point of complete or partial mastery.
                    </p>

                </div>
            </section>
        );
    }
}

export default AboutMe;