import React from 'react';
import Logo from "../../../components/Logo/Logo";
import Navigation from "../../../components/Navigation/Navigation";
import Socials from "../../../components/Socials/Socials";

import { faTwitter, faInstagram, faTelegram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {menuItems} from './MenuItems';


const header = (props) => {

    return (
            <div id="header">
                <div className="top">
                    {/*Logo */}
                    <Logo title="Sayyed Jamal Ghasemi">
                        Full Stack Developer
                    </Logo>
                    {/*Nav */}
                    <Navigation data={menuItems}/>
                </div>
                <div className="bottom">
                    {/*Social Icons*/}
                    <ul className="icons">
                        <Socials icon={faTwitter} title="Twitter" link="https://twitter.com/jamal13647850"/>
                        <Socials icon={faInstagram} title="Instagram" link="https://www.instagram.com/jamal13647850/"/>
                        <Socials icon={faTelegram} title="Telegram" link="https://t.me/jamaldev"/>
                        <Socials icon={faLinkedin} title="Linkedin" link="https://www.linkedin.com/in/jamal1364/"/>
                    </ul>

                </div>
            </div>
    );
};

export default header;
